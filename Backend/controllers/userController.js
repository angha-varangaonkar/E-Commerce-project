const user = require('../models/userModel')

exports.register = async(req,res)=>{
    //check if user already exist
    const user = await user.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({message:'User already exist'})
        }
}