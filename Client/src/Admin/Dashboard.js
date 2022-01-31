import DashboardContent from "./DashboardContent";
import Bookings from "./Bookings";
import Users from "./Users";
import Rooms from "./Rooms";
import Addroom from "./Addroom";

import React, {useEffect} from "react";
import { Tabs } from "antd";


import {GrUserAdmin} from 'react-icons/gr'
const { TabPane } = Tabs;

function Dashboard() {

  
  useEffect(() => {

    const admin = JSON.parse(localStorage.getItem("currentUser"))
    if(!admin.isAdmin)
    {
        window.location.href='/'
    }
  }, [])


  return (
    <div className="ml-3 mt-5 m-5">
    <div className="text-center m-2" style={{ fontSize: "35px" }}>
      <h2>Admin Dashboard <GrUserAdmin/></h2>
    </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Dashboard" key="1">
          <div className="row">
          <DashboardContent/>
          </div>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <Bookings/>
        </TabPane>
        <TabPane tab="Rooms" key="3">
          <Rooms/>
        </TabPane>
        <TabPane tab="Add Rooms" key="4">
          <Addroom/>
        </TabPane>
        <TabPane tab="Users" key="5">
         <Users/>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Dashboard;
