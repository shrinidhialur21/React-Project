import React from "react";
import Navbar from "./Navbar";
import Launch from "./Launch";
import Missions from "./Missions";
import Payload from "./Payload";
import Rocket from "./Rocket";
import Dashboard from './Dashboard' 
// import App from "../App";
import "../components/hstyle.css"
import { Route, Routes } from "react-router-dom";
import { Booking } from "./Booking";
import  ConfirmationPage  from "./ConfirmationPage";
import  Confirmation2  from "./Confirmation2";
// import BasicPagination from "./pagination";

function HomePagesl() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Dashboard />}></Route>
        <Route path="/Launch" element = {<Launch />}></Route>
        <Route path="/Missions" element = {<Missions />}></Route>
        <Route path="/Payload" element = {<Payload />}></Route>
        <Route path="/Rocket" element = {<Rocket />}></Route>
        <Route path="/Rocket/:id" element = {<Booking />}></Route>
        <Route path="/:id" element = {<Rocket />}></Route>
        <Route path="/ConfirmationPage/:rocketId/:launchDate" element = {<ConfirmationPage />}></Route>
        <Route path="/Confirmation2" element = {<Confirmation2 />}></Route>

      </Routes>
      {/* <BasicPagination /> */}
      {/* <img  src="https://revolutionized.com/wp-content/uploads/sites/5/2022/05/rocket-launch-at-sunset.jpg"alt="React Image"/> */}
      
    </>
  );
}

export default HomePagesl;
