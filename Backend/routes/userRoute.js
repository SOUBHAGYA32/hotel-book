import express from "express";
const userRouter = express.Router();
const {
    register, 
    registerValidations,
    login,
    loginValiations
} = require('../Controller/userController');
const User = require('../Model/user');

userRouter.post("/register",registerValidations,register);
userRouter.post("/login",loginValiations,login );

export default userRouter