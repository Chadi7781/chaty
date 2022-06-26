
const User= require('../models/user.model');

const bcrypt = require('bcrypt');


exports.register = async (req,res,next) => {

    const {username,email,password} = req.body;


    const usernameCheck = await User.findOne({username:username});
    const emailCheck = await User.findOne({email:email});

    if(usernameCheck || emailCheck ) return res.json({msg: "Username or email are already used",status:false});


    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        email,username,password:hashedPassword
    });

    return res.json({status:true, user});




}