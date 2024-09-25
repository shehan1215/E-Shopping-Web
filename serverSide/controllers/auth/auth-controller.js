const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async(req, res)=>{
    const {userName, email, password} = req.body;

    try {
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success : false,
            message : "Error",
        });
    }
}

const login = async(req, res)=>{
    try {
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success : false,
            message : "Error",
        });
    }
}