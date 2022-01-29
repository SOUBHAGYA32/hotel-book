import Loading from "../Components/Loading";
import Error from "../Components/Error";
import React, { useState, useEffect } from "react";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import Swal from 'sweetalert2'
const axios = require("axios");

function Bookingscreen({ match }) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [rooms, setrooms] = useState();
  const [totalAmount, settotalAmount] = useState();
  const roomid = match.params.roomid;

  //Calculating Total Days
  const fromdate = moment(match.params.fromdate, "DD-MM-YYYY");
  const todate = moment(match.params.todate, "DD-MM-YYYY");
  const totalDays = moment.duration(todate.diff(fromdate)).asDays() + 1;

 

  //API Request
  useEffect(async () => {
    if(!localStorage.getItem('currentUser')){
      window.location.reload = '/login'
    }
    try {
      setloading(true);
      const data = (
        await axios.post("/api/rooms/getroombyid", {
          roomid: match.params.roomid,
        })
      ).data;
      setrooms(data);
      setloading(false);
      settotalAmount(totalDays * data.rent_perday);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  }, []);

  const publickey =
    "pk_test_51JSbmzSGxlnyvYTupoq6TTfN66ZGpI20k9eFYzutJp5rYeFG4OlnyzVkpLN2g4colwqf4Bzsa8CSjF6hl6Ca6aJP001kYzkxcd";

  async function onToken(token) {
    const bookingDetails = {
      rooms,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromdate,
      todate,
      totalDays,
      totalAmount,
      token
    };
    try {
      setloading(true);
      const result = await axios.post("/api/booking/bookroom", bookingDetails);
      setloading(false);
      Swal.fire({
        icon: 'success',
        title: 'Congrats! Booked',
        text: 'Your Room has booked succeessfully'
      }).then(result=>{
        window.location.href='/'
    })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'Please Try again!'
      })
      setloading(false)
      console.log(error);
    }
  }

  return (
    <div className="m-5">
      {loading ? (
        <Loading />
      ) : rooms ? (
        <div>
          <div className="row justify-content-center mt-5 box-s">
            <div className="col-md-6">
              <h1>{rooms.name}</h1>
              <img src={rooms.image_urls[0]} alt="" className="bigimg" />
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1>Booking Details</h1>
                <hr />
                <b>
                  <p>
                    Name :{" "}
                    {JSON.parse(localStorage.getItem("currentUser")).name}
                  </p>
                  <p>From Date : {match.params.fromdate} </p>
                  <p>To Date : {match.params.todate} </p>
                  <p>Max Count : {rooms.maxcount}</p>
                </b>
              </div>
              <div style={{ textAlign: "right" }}>
                <h1>Ammount</h1>
                <hr />
                <b>
                  <p>Total Days : {totalDays} </p>
                  <p>Rent Per Day : {rooms.rent_perday} </p>
                  <p>Total Amount : {totalAmount} </p>
                </b>
              </div>
              <div style={{ float: "right" }}>
                <StripeCheckout
                  amount={totalAmount * 100}
                  token={onToken}
                  stripeKey={publickey}
                  currency="INR"
                >
                  <button className="btn">Pay Now</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Bookingscreen;
