import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import { APP_PORT, MONGO_URL } from './config';
import roomModel from './Model/room';
import roomRouter from './routes/roomRoute';
import userRouter from './routes/userRoute'




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
app.use('/api/users', userRouter)

const server = app.listen(APP_PORT, ()=>{
    console.log(`Listening on PORT ${APP_PORT}.`)
});

//Handled promise rejection
process.on('unhandledRejection', err =>{
    console.log(`ERROR : ${err.message}`);
    console.log(`Shutting Down The Server due to Unhandled Promise exception`);
    server.close(()=>{
        process.exit(1);
    })
})


