import express from "express";
const roomRouter = express.Router();
const {getRooms, getroomsByid, getallrooms, addroom} = require('../Controller/roomController');

roomRouter.get('/getrooms',getRooms);

roomRouter.post('/getroombyid',getroomsByid);
roomRouter.get('/getallrooms',getallrooms);
roomRouter.post('/addroom', addroom);

export default roomRouter
