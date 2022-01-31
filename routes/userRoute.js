import express from "express";
const userRouter = express.Router();
const {
    register, 
    registerValidations,
    login,
    loginValiations,
    getallusers
} = require('../Controller/userController');
const User = require('../Model/user');

userRouter.post("/register",registerValidations,register);
userRouter.post("/login",loginValiations,login );
userRouter.get('/getallusers',getallusers);

export default userRouter