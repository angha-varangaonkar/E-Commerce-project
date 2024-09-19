const bcrypt = require('bcrypt');
const User = require('./../models/userModel')


exports.register = async(req,res) => {
   try {
      const {email} = req.body
const isExistingUser = await User.findOne({email}) ;

if(isExistingUser){
    return res.status(400).send("User already exists")
}

const user = await User.create(req.body)

if(user){
   return  res.status(201).json({
          message : "User created Successfully",
          data : user
     });

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


// exports.login=async(req, res)=>{
//      try {
//           //step check email if user exists
//        const { email, password} = req.body;
//        const user = await user.findOne({ email });

//        //   console.log(user)
//        if (!user) {
//           return res.status(400).send('user is not registerred,please register and try again')
//        }

//        //step 2 match the password
//        const isPasswordMatch = await bcrypt.compare(password, user.password);
//        if (!isPasswordMatch) {
//           return res.status(400).send('invalid password')
//        }

//        res.status(200).json({
//        message:"login sucessful "
//        });

//      }catch (error) {
//        res.status(404).send('error');
//      }
//   };



exports.login = async (req, res) => {
     try {
          //step check email if user exists
       const { email, password } = req.body;
       const user = await User.findOne({ email });
   
       if (!user) {
         return res.status(400).send('user is not registerred,please register and try again');
       }
       
       //step 2 match the password
       const isPasswordMatch = await bcrypt.compare(password, user.password);
       if (!isPasswordMatch) {
         return res.status(400).send('invalid password');
       }
   
       res.status(200).json({
         message: "Login successful"
       });
     } catch (error) {
       res.status(404).send('error');
     }
   };