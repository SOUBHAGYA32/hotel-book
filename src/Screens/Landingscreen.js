import React from "react";
import { Link } from "react-router-dom";
import { BiHotel } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration:'2000'
});

function Landingscreen() {
  return (
    <div className="container-fluid">
      <div className="landing row justify-content-center text-center">
        <div
          className="col-md-9 my-auto"
          style={{ borderRight: "8px solid white" }}
        >
          <h2 style={{ color: "white", fontSize: "130px" }} data-aos="zoom-in">
            CapitalRooms <BiHotel style={{ color: "#ffc107" }}/>
          </h2>
          <h1 style={{ color: "#ffc107" }} data-aos="zoom-out">
            “World's leading chain of hotels and Homes.
          </h1>
          <p className="text-white">More Destinations. More Ease. More Affordable.</p>
          <Link to="/home">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingscreen;
