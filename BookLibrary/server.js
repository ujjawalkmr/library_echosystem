const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
console.log("server hit");
app.use("/api/auth",authRoutes);
app.use("/api/books",bookRoutes);

app.get("/",(req,res)=>{
 res.send("API running");
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
 console.log(`Server running on port ${PORT}`)
})