const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");

require("dotenv").config();
app.use(cors());
app.use(express.json());

const DB = process.env.DB;
console.log(DB);

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log("Database error");
    console.log(err);
  });

// APIS
app.use("/api/user", userRoutes);

// if(process.env.NODE_ENV==='production'){
//     app.use(express.static("frontend/build"));
//     const path=require("path");
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
//     })
// }

app.listen(port, () => {
  console.log(`the server is up and running at port ${port}`);
});
