const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
console.log(process.env.ATLAS_CONNECTION_URL);
const jsonParser = bodyParser.json()

const apiRoutes = require("./Routes/api");
const res = require("express/lib/response");

mongoose
.connect(process.env.ATLAS_CONNECTION_URL, { useNewUrlParser: true })
.then(() => console.log(`Database connected successfully`))
.catch((err) => console.log(err));

mongoose.Promise = global.Promise;
const app = express();
app.use(cors());
app.use(express.json());
app.use((res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
  next();
})


app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => {
  console.log("Application is started on PORT =" + process.env.PORT);
});