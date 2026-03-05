const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Signup
exports.signup = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        const token = generateToken(user._id);
        res.status(200).json({ user, token, message: "User sign done" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}


// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user._id);
        res.status(200).json({ user, token, message: "User login successful" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}