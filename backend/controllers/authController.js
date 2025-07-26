const UserModel = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await UserModel.findOne({ email });

        if (user) {
            return res.status(409).json({
                message: "user already exits",
                success: false
            })
        }

        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        userModel.save();

        res.status(201).json({
            message: 'Signup successfully',
            success: true
        })

    } catch (error) {
        console.log("Error in signup: ", error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(403).json({
                message: "Invalid email or password",
                success: false
            })

        }
        const isPassword = await bcrypt.compare(password, user.password);

        if (!isPassword) {
            return res.status(403).json({
                message: "Invalid email or password",
                success: false
            })
        }

        const token = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' })

        res.status(200).json({
            message: "Login successfully",
            success: true,
            user: {
                email: user.email,
                name: user.name,
                token: token
            }
        })




    } catch (error) {
        console.log("Error in login: ", error)
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}
module.exports = {
    signup,
    login
}