import express from 'express';
const bodyParser = require('body-parser')
require('dotenv').config();
require('./db');

import roomRouter from './routes/roomRoute';
import userRouter from './routes/userRoute'
import bookRouter from './routes/bookingRoute';




const app = express();
app.use(express.json());
app.use(bodyParser.json());


app.use('/api/rooms', roomRouter)
app.use('/api/users', userRouter)
app.use('/api/booking', bookRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`App is Running on PORT 5000`)
})

