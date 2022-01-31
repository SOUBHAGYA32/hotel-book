import Loading from "./Loading";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Tag } from "antd";
import Swal from "sweetalert2";



function Booking() {
  const [mybookings, setmybookings] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(async () => {
    try {
      setloading(true);
      const data = await (
        await axios.post("/api/booking/getuserbookings", { userid: user._id })
      ).data;
      setloading(false);
      setmybookings(data);
      console.log(data);
    } catch (error) {
      setloading(false);
      seterror(true);
      console.log(error);
    }
  }, []);
  async function cancelBooking(bookingid, roomid) {
    try {
      setloading(true);
      const result = await axios.post("/api/booking/cancelbooking", {
        bookingid: bookingid,
        userid: user._id,
        roomid: roomid,
      });
      Swal.fire('Congrats' , 'Your Room has cancelled succeessfully' , 'success').then(result=>{
        window.location.href='/profile'
    })
    } catch (error) {
      Swal.fire("Oops", "Something went wrong", "error").then((result) => {
        window.location.href = "/profile";
      });
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {loading && <Loading />}
          {mybookings &&
            mybookings.map((booking) => {
              return (
                <Row gutter={16}>
                  <Col span={8} className="gutter-row">
                    <Card
                        hoverable
                      title="Booking Details"
                      bordered={false}
                      style={{ width: 600, marginTop: 16 }}
                      className="box-s"
                    >
                      <p>
                        <b>Hotel Name: </b>
                        {booking.rooms}
                      </p>
                      <p>
                        <b>BookingId:</b> {booking._id}
                      </p>
                      <p>
                        <b>Transaction ID: </b>
                        {booking.transactionId}
                      </p>
                      <p>
                        <b>Checkin: </b>
                        {booking.fromdate}{" "}
                      </p>
                      <p>
                        <b>Checkout: </b>
                        {booking.todate}{" "}
                      </p>
                      <p>
                        <b>Amount: </b>
                        {booking.totalAmount}{" "}
                      </p>
                      <p>
                        <b>Status: </b>{" "}
                        {booking.status == "booked" ? (
                          <Tag color="green">Confirmed</Tag>
                        ) : (
                          <Tag color="red">Cancelled</Tag>
                        )}
                      </p>
                      <div className="text-right" style={{ float: "right" }}>
                        {booking.status == "booked" && (
                          <button
                            className="btn "
                            onClick={() =>
                              cancelBooking(booking._id, booking.roomid)
                            }
                          >
                            Cancel Booking
                          </button>
                        )}
                      </div>
                    </Card>
                  </Col>
                </Row>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Booking;
