import express from 'express';
import mongoose from "mongoose";
import { APP_PORT, MONGO_URL } from './config';
import roomModel from './Model/room';
import roomRouter from './routes/roomRoute';




const app = express();
app.use(express.json());


mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
var connection = mongoose.connection;

connection.on('error', ()=>{
    console.log("Connection Failed!..");
})
connection.on('connected', ()=>{
    console.log("Connection Successful..");
})



app.use('/api/rooms', roomRouter)

app.listen(APP_PORT, ()=>{
    console.log(`Listening on PORT ${APP_PORT}.`)
});


