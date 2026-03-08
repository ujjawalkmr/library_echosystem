// app.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
dotenv.config();

connectDB();

const corsOptions = {
  origin:  [
      process.env.FRONTEND_URI, 
      process.env.FRONTEND_LOCAL_URI
    ], 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
// Root route (to check API working)
app.get("/", (req, res) => {
    console.log("Backend start on server");
  res.send("Backend Running with origin access");
});
console.log("server hit");
app.use("/api/auth",authRoutes);
app.use("/api/books",bookRoutes);

module.exports = app;






