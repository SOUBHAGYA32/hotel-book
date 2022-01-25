import express from 'express';
const bodyParser = require('body-parser')
require('dotenv').config();
require('./db');

import roomRouter from './routes/roomRoute';
import userRouter from './routes/userRoute'




const app = express();
app.use(bodyParser.json());


app.use('/api/rooms', roomRouter)
app.use('/api/users', userRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`App is Running on PORT 5000`)
})

