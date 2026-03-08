// app.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const app = express();


app.use(cors());
app.use(express.json());
// Root route (to check API working)
app.get("/", (req, res) => {
    console.log("Backend start");
  res.send("Backend Running");
});
console.log("server hit");
app.use("/api/auth",authRoutes);
app.use("/api/books",bookRoutes);

module.exports = app;






