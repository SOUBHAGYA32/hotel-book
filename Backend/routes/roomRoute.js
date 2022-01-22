import express from "express";
const roomRouter = express.Router();
import roomModel from '../Model/room';

roomRouter.get('/getrooms', async(req,res)=>{
    try {
        const rooms = await roomModel.find({})
        res.send(rooms);
    } catch (error) {
        return res.status(400).json({message: error})
    }
});

roomRouter.post('/getroombyid', async(req,res)=>{
    const roomid = req.body.roomid
    try {
        const room = await roomModel.findOne({_id : roomid})
        res.send(room);
    } catch (error) {
        return res.status(400).json({message: error})
    }
});

export default roomRouter
