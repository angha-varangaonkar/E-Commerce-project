const express=require('express');
const userController =require('./../controllers/userController')
const router = express.Router();

router.post('/register',userController.register)//this is register
router.post('/login',userController.login)//this is for login 

module.exports = router;