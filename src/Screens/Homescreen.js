import Loading from "../Components/Loading";
import Room from "../Components/Room";
import Error from "../Components/Error";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";
const axios = require("axios");

//Ant Design
const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState([]);
  const [error, seterror] = useState([]);
  const [fromdate, setfromdate] = useState("");
  const [todate, settodate] = useState("");
  const [duplicaterooms, setduplicaterooms] = useState([]);
  const [searchkey, setsearchkey] = useState("");
  const [type, settype] = useState("all");

  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get("/api/rooms/getrooms")).data;
      setrooms(data);
      setloading(false);
      setduplicaterooms(data);
    } catch (error) {
      seterror(true);
      console.log(error);
      setloading(false);
    }
  }, []);

  function filterByDate(dates) {
    setfromdate(moment(dates[0]).format("DD-MM-YYYY"));
    settodate(moment(dates[1]).format("DD-MM-YYYY"));

    var temprooms = [];
    var availability = false;
    for (const rooms of duplicaterooms) {
      if (rooms.currentbooking.length > 0) {
        for (var booking of rooms.currentbooking) {
          if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            )
          ) {
            if (
              moment(dates[0]).format("DD-MM-YYYY") !== booking.fromdate &&
              moment(dates[0]).format("DD-MM-YYYY") !== booking.todate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.fromdate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.todate
            ) {
              availability = true;
            }
          }
        }
      }
      if(availability==true || rooms.currentbooking.length==0 ){
        temprooms.push(rooms);
      }
      setrooms(temprooms);
    }
  }
  function filterBySearch()
  {
    const temp = duplicaterooms.filter(rooms => rooms.name.toLowerCase().includes(searchkey.toLocaleLowerCase()))
    setrooms(temp)
  }

  //Filter By Room Type Delux or Non-Delux
  function filterByType(e)
  {
    settype(e);
    const temp = duplicaterooms.filter(rooms =>rooms.type.toLowerCase()==(e.toLowerCase()));
    setrooms(temp)
    
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row box-s p-3 m-5">
          <div className="col-md-4">
            <RangePicker
              style={{ height: "38px" }}
              format="DD-MM-YYYY"
              className="m-2"
              onChange={filterByDate}
            />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control i2 m-2"
              placeholder="Search Rooms"
              value={searchkey}
              onKeyUp={filterBySearch}
              onChange={(e)=>{setsearchkey(e.target.value)}}
            />
          </div>
          <div className="col-md-4">
            <select className="form-control m-2" value={type} onChange={(e)=>{filterByType(e.target.value)}}>
              <option value="all">All</option>
              <option value="delux">Delux</option>
              <option value="non-delux">Non-Delux</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loading />
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-3">
                <Room room={room} fromdate={fromdate} todate={todate} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Homescreen;
