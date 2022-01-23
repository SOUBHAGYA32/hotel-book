import express from "express";
const userRouter = express.Router();
const User = require('../Model/user');

userRouter.post('/register' , async(req,res)=>{
    const {name , email , password} = req.body

    const newUser = new User({name , email , password})
    
    try {

        const user = await User.findOne({ email: req.body.email });
        if(user){
            return res
            .send({ message: "User with given email already Exist!" });
        }

       await newUser.save();
       res.send({ message: "User Created successfully" });

    } catch (error) {
         return res.status(400).json({ message: "Internal Server Error"});
    }
});


userRouter.post('/login', async(req,res)=>{
    const {email, password} = req.body

    try {
        
       const user = await User.findOne({ email: req.body.email });

        if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name , 
                email : user[0].email, 
                isAdmin : user[0].isAdmin, 
                _id : user[0]._id
            }
            res.send(currentUser);
            return res.status(200).json({message : 'User Login Success'});
        }
        else{
            return res.status(400).json({ message: 'User Login Failed' });
        }

    } catch (error) {
           return res.status(400).json({ message: 'Something went weong' });
    }

});

export default userRouter