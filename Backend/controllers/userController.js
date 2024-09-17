const User = require('./../models/userModel')

exports.register = async(req,res) => {
   try {
      const {email} = req.body
const isExistingUser = await User.findOne({email}) ;

if(isExistingUser){
     res.status(400).send("User already exists")
}

const user = await User.create(req.body)

if(user){
     res.status(201).json({
          message : "User created Successfully",
          data : user
     })
}
 
   } catch (error) {
     res.status(400).send(error)
   }


}



   //check if user already exist
    // const user = await user.findOne({email:req.body.email})
    //     if(user){
    //         return res.status(400).json({message:'User already exist'})
    //     }