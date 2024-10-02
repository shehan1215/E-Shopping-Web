const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User')

const registerUser = async(req, res)=>{
    const {userName, email, password} = req.body;
    try {
        const checkUser = await User.findOne({email});
        if(checkUser) return res.json({
            success: false,
            message: "You are already registered with this email"
        });
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            password : hashPassword
        }); 
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "User Register Success",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success : false,
            message : "Error",
        });
    }
}
const login = async(req, res)=>{
    const {email, password} = req.body;
    try {
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success : false,
            message : "Error",
        });
    }
}
module.exports = {registerUser,login}