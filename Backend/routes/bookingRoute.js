const express = require("express");
const bookRouter = express.Router();
const { bookroom, getbookbyid, cancelbooking } = require('../Controller/bookingController');

bookRouter.post('/bookroom',bookroom);
bookRouter.post('/getuserbookings', getbookbyid);
bookRouter.post("/cancelbooking", cancelbooking);






export default bookRouter