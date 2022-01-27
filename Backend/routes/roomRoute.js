import express from "express";
const roomRouter = express.Router();
const {getRooms, getroomsByid} = require('../Controller/roomController');

roomRouter.get('/getrooms',getRooms);

roomRouter.post('/getroombyid',getroomsByid);

export default roomRouter
