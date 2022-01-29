import Booking from "../Components/Booking";
import React, {useEffect, useState} from "react";
import { Tabs, Card, Avatar, Button } from "antd";

const { TabPane } = Tabs;
const { Meta } = Card;
function Profilescreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
       if(!user){
        window.location.href='/login'
       }
    }, []);

  return (
    <div className="container m-5 ml-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="My Profile" key="1">
        <div className="row">
           <div className="col-md-6 box-s m-2 p-3">
           <h1>Name : {user.name}</h1>
          <h1>Email : {user.email}</h1>
          <h1>Admin Access : {user.isAdmin ? "Yes" : "No"}</h1>
          <div className='text-right'>
              <button className='btn'>Get Admin Access</button>
              </div>
           </div>
         </div>
        </TabPane>
        <TabPane tab="My Bookings" key="2">
        <h1> <Booking/></h1>
        </TabPane>
        <TabPane tab="CAPITAL ROOMS Wizard" key="3">
          <Card
            title="CAPITAL ROOMS Wizard"
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
            style={{ width: 300 }}
          >
            <p>
              OYO Wizard is our hospitality membership program. As a member, you
              will be entitled to additional discounts of up to 10% on OYO
              Wizard member hotels and will also enjoy exclusive benefits with
              our partner alliances.
            </p>
            <button className="btn">Buy Membership</button>
          </Card>
          ,
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Profilescreen;
