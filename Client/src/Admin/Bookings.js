import Loading from "../Components/Loading";
import Error from "../Components/Error";

import React, {useState, useEffect} from "react";
import axios from "axios";
import {Tag} from 'antd'

function Bookings() {
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(async () => {
    try {
        setloading(true)
      const data = await (await axios.get("/api/booking/getallbookings")).data;
      localStorage.setItem("bookings",JSON.stringify(data));
      setbookings(data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
      console.log(error);
    }
  }, []);


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <h1>Bookings</h1>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <div className="text-center">
              <table className="table table-bordered table-hover table-dark">
                <thead className="box-s">
                  <tr>
                    <th>Bookings</th>
                    <th>UserID</th>
                    <th>Room</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => {
                      return (
                        <tr>
                          <td>{booking._id}</td>
                          <td>{booking.userid}</td>
                          <td>{booking.rooms}</td>
                          <td>{booking.fromdate}</td>
                          <td>{booking.todate}</td>
                          <td>
                        {booking.status == "booked" ? (
                          <Tag color="green">Confirmed</Tag>
                        ) : (
                          <Tag color="red">Cancelled</Tag>
                        )}
                        </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookings;
