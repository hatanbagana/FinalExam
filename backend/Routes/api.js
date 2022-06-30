const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Tasks = require("../models/blog");




router.get("/get-tasks", (req, res) => {
  Tasks.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: data,
      });
    }
  });
});

router.delete("/delete-tasks", (req, res, next) => {
  Tasks.findOneAndRemove({ orderId: req.body.orderId }, function (err, data) {
    if (err) next;
    console.log(req.body);
    res.send("deleted");
  });
})

router.put("/update-task", (req, res, next) => {
  console.log(req.body);
  Tasks.findByIdAndUpdate(
    req.body._id,
    {
      taskName: req.body.taskName,
      isDone: req.body.isDone
    },
    function (err, data) {
      if (err) next;
      res.send("updated");
    }
  );
})
router.post("/post-tasks", (req, res) => {
  const reqBody = req.body;

  console.log(reqBody);
  let newTask = new Tasks({
    _id: new mongoose.Types.ObjectId(),
    taskName: reqBody.taskName,
    orderId: reqBody. orderId,
    isDone: reqBody.isDone
  });

  newTask
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});




module.exports = router;
