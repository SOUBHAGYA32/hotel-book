const express = require("express");
const bookRouter = express.Router();
const { bookroom } = require('../Controller/bookingController');

bookRouter.post('/bookroom',bookroom);







export default bookRouter