
import React from "react";
import "../components/hstyle.css";
import { Link } from "react-router-dom";
// import Logo from "./logo";
// import rocketImage from "../https://t4.ftcdn.net/jpg/05/00/92/89/360_F_500928932_xssY3GuM0xDpyK3t1fWREoYvG356L5qE.jpg"; 

export default function Navbar() {
  return (
    <div className="cont">
      <nav className="nav">
        <div className="header-container">
          
         {/* <Logo /> */}
          <h1>Stellar Launcher</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Launch">Launches</Link>
          </li>
          <li>
            <Link to="/Missions">Missions</Link>
          </li>
          <li>
            <Link to="/Payload">Payload</Link>
          </li>
          <li>
            <Link to="/Rocket">Rocket</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}



