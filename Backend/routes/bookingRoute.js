const express = require("express");
const bookRouter = express.Router();
const { bookroom, getbookbyid, cancelbooking, getallbooking } = require('../Controller/bookingController');

bookRouter.post('/bookroom',bookroom);
bookRouter.post('/getuserbookings', getbookbyid);
bookRouter.post("/cancelbooking", cancelbooking);
bookRouter.get("/getallbookings",getallbooking );





export default bookRouter