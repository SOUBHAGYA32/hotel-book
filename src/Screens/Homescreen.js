import Loading from "../Components/Loading";
import Room from "../Components/Room";
import Error from "../Components/Error";
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import React, { useState, useEffect } from "react";
const axios = require("axios");

//Ant Design
const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState([]);
  const [error, seterror] = useState([]);
  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get("/api/rooms/getrooms")).data;
      setrooms(data);
      setloading(false);
    } catch (error) {
      seterror(true);
      console.log(error);
      setloading(false);
    }
  }, []);

  function filterByDate(dates){
    console.log(dates);
  }




  return (
    <div className="container">
    <div className="container mt-5">
        <div className="row box-s p-3 m-5">
          <div className="col-md-4">
            <RangePicker style={{ height: "38px" }} format='DD-MM-YYYY' className='m-2' onChange={filterByDate}/>
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control i2 m-2"
              placeholder='Search Rooms'
             
            />
          </div>
          <div className="col-md-4">
            <select className="form-control m-2">
              <option value="all">All</option>
              <option value="delux">Delux</option>
              <option value="non-delux">Non Delux</option>
              
            </select>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loading/>
        ) : (rooms.length > 1) ? (rooms.map((room) => {
            return <div className="col-md-9 mt-3">
                <Room room={room}/>
            </div>;
          })): (
            <Error/>
          )}
      </div>
    </div>
  );
}

export default Homescreen;
