const mongoose =require('mongoose');
const validator=require('validator');
const bcrypt =require('bcrypt');

const UserSchema =  new mongoose.Schema({
    name:{
        type :String,
        required : [true ,'name is required'],
        maxLength : 40
    },
    email:{
        type :String ,
        required : [true ,'email is required'],
        unique :true,
        validate :{
            validator : validator.isEmail,
            message : "please enter a valid email"
        }
    },
    phone :{
        type:String ,
        required: [true ,'phone number is required'],

    },
    password:{
        type :String,
        required:[true, 'password is required'],
        validate:{
            validator: function (value){
                return validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1
                })
        },
        message:"not a strong password "
        }
    }
});


//hashing
UserSchema.pre('save', async function(next){
    // console.log('new document');
    
    //if password is not modified then we dont have to hash it again 
    if (!this.isModified('password')) return next()

    //if it is modified then hash it again 
       this.password = await bcrypt.hash(this.password ,12)
    next() ;
    
}); 

const user = mongoose.model("User",UserSchema);

module.exports=user;
