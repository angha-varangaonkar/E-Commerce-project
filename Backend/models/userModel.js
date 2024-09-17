const mongoose =require('mongoose');
const validator=require('validator');

const UserShema =  new mongoose.Schema({
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
    password :{
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

const user =mongoose.model("User",UserShema);

module.exports=user;
