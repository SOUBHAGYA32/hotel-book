import React, {useState, PureComponent } from 'react';
import {FaBookmark, FaHotel, FaTrash} from 'react-icons/fa'

function DashboardContent() {
    const rooms = JSON.parse(localStorage.getItem('rooms'));
    const users = JSON.parse(localStorage.getItem('users'));
    const bookings = JSON.parse(localStorage.getItem('bookings'));
    
  return (
    <div>
    <div className='row mb-3'>
        <div className="col-xl-3 col-sm-6 py-2">
            <div className="card bg-warning text-white h-100">
                <div className="card-body  bg-warning" style={{backgroundColor:"#57b960"}}>
                    <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                    <h6 className="text-uppercase">Users</h6>
                        <h1 className="display-4">{users.length}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
            <div className="card bg-success text-white h-100">
                <div className="card-body  bg-success" style={{backgroundColor:"#57b960"}}>
                    <div className="rotate">
                    <FaBookmark className='fa-4x'/>
                    <h6 className="text-uppercase">Total Bookings</h6>
                    <h1 className='display-4'>{bookings.length}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
            <div className="card bg-info text-white h-100">
                <div className="card-body  bg-info" style={{backgroundColor:"#57b960"}}>
                    <div className="rotate">
                    <FaHotel className="fa-4x"/>
                    <h6 className="text-uppercase">Rooms</h6>
                        <h1 className="display-4">{rooms.length}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
            <div className="card bg-danger text-white h-100">
                <div className="card-body  bg-danger" style={{backgroundColor:"#57b960"}}>
                    <div className="rotate">
                    <FaTrash className="fa-4x"/>
                    <h6 className="text-uppercase">Cancel Booking</h6>
                        <h1 className="display-4">
                           2
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default DashboardContent;
