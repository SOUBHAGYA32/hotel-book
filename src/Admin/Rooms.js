import Loading from "../Components/Loading";
import Error from "../Components/Error";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Rooms() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  useEffect(async () => {
    try {
      setloading(true);
      const data = await (await axios.get("/api/rooms/getallrooms")).data;
      setrooms(data);
      localStorage.setItem('rooms',JSON.stringify(data));
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-11">
          <h1>Rooms</h1>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <div className="text-center">
              <table className="table table-bordered table-dark">
                <thead className="box-s">
                  <tr>
                    <th>Room Id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Rent Per day</th>
                    <th>Max Count</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => {
                    return (
                      <tr>
                        <td>{room._id}</td>
                        <td>{room.name}</td>
                        <td>{room.type}</td>
                        <td>{room.rent_perday}</td>
                        <td>{room.maxcount}</td>
                        <td>{room.phonenumber}</td>
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

export default Rooms;
