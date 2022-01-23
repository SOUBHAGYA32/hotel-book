import express from "express";
const userRouter = express.Router();
const User = require('../Model/user');

userRouter.post("/register", async(req, res) => {
    const {name , email , password} = req.body
    try {
		const user = await User.findOne({ email});
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		await new User({ name,email,password}).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}

});


userRouter.post("/login", async(req, res) => {

    const {email , password} = req.body

    try {
        
        const user = await User.find({email , password})

        if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name , 
                email : user[0].email, 
                isAdmin : user[0].isAdmin, 
                _id : user[0]._id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({ message: 'User Login Failed' });
        }

    } catch (error) {
           return res.status(400).json({ message: 'Something went weong' });
    }
  
});

export default userRouter