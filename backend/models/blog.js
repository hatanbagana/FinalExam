const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  taskName: {
    type: String,
    required: [true, 'Enter the name!'],
    },
  orderId: {
    type: Number,
    unique: true,
    required: [true, 'Enter the id!'],
    },
  isDone:{
    type: Boolean,
  }
});
module.exports = mongoose.model("Tasks", taskSchema);