import Booking from "../Model/booking";
import Room from "../Model/room";
const { v4: uuidv4 } = require("uuid");
import moment from "moment";
import jwt from "jsonwebtoken";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
require("dotenv").config();

//Token Create
const createToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET, {
    expiresIn: "7d",
  });
};

module.exports.bookroom = async (req, res) => {
  const { rooms, userid, fromdate, todate, totalDays, totalAmount, token } =
    req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      try {
        const newbooking = await Booking.create({
          userid,
          rooms: rooms.name,
          roomid: rooms._id,
          totalDays,
          fromdate: moment(fromdate).format("DD-MM-YYYY"),
          todate: moment(todate).format("DD-MM-YYYY"),
          totalAmount,
          transactionId: "1234",
          status: "booked",
        });
        const roomtemp = await Room.findOne({ _id: rooms._id });
        roomtemp.currentbooking.push({
          bookingid: newbooking._id,
          fromdate: moment(fromdate).format("DD-MM-YYYY"),
          todate: moment(todate).format("DD-MM-YYYY"),
          userid: userid,
          status: newbooking.status,
        });
        await roomtemp.save();
        const token = createToken(newbooking);
        return res
          .status(200)
          .json({
            msg: "Successfully Booked. Enjoy Your Day!",
            newbooking,
            token,
          });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ errors: error });
      }
    } else {
      res.send("Payment Failed");
    }

    res.send("Room Booked Successfully");
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
    console.log(error);
  }
};
