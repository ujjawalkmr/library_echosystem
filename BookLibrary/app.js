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
  origin: [
    "https://library-echosystem-frontend.vercel.app",
    "http://localhost:3000"
  ].filter(Boolean),
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};
app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
// Root route (to check API working)
app.get("/", (req, res) => {
  console.log("Backend start on server");
  res.send("Backend Running starssss");
});
console.log("server hit");
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

module.exports = app;






