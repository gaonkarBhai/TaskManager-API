// 1.6.2023

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const route = require("./routes/task")
const  connDB  = require("./database/conn");

connDB()  // database config

// Middleware
app.use(express.json())
app.use("/api/v1/task",route)

// comman route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Happy Coding" });
});
app.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(port, () => {
  console.log("Server Connected");
});
