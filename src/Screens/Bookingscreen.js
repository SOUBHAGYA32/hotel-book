import Loading from "../Components/Loading";
import Error from "../Components/Error";
import React, { useState, useEffect } from "react";
const axios = require('axios');
function Bookingscreen({match}) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [rooms, setrooms] = useState();
  useEffect(async () => {
      try {
        setloading(true);
        const data = (await axios.post("/api/rooms/getroombyid",{ roomid : match.params.roomid})).data;
        setrooms(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
  }, []);
  
  return (
      <div className="m-5">
        {loading ? (<Loading/>) : rooms ? (<div>

          <div className="row justify-content-center mt-5 box-s">
            <div className="col-md-6">
              <h1>{rooms.name}</h1>
              <img src={rooms.image_urls[0]} alt="" className="bigimg"/>
            </div>
            <div className="col-md-6">
              <div style={{textAlign: 'right'}}>
              <h1>Booking Details</h1>
              <hr />
              <b>
              <p>Name : </p>
              <p>From Date : </p>
              <p>To Date : </p>
              <p>Max Count : {rooms.maxcount}</p>
              </b>
              </div>
              <div style={{textAlign: 'right'}}>
                <h1>Ammount</h1>
                <hr />
                <b>
                  <p>Total Days : </p>
                  <p>Rent Per Day : {rooms.rent_perday} </p>
                  <p>Total Amount : </p>
                </b>
              </div>
              <div style={{float : 'right'}}>
                <button className="btn">Pay Now</button>
              </div>
            </div>
          </div>
        </div>) : (<Error/>)}
      </div>
  );
}

export default Bookingscreen;
