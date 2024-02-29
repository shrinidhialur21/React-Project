import React, { useState, useEffect,useRef} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import "../components/Launch.css";
import { Button } from "@mui/material";
// import { ConfirmationPage } from "./ConfirmationPage";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Pagination from "./pagination";


export const Booking = () => {
  let { id } = useParams();
  const navigate = useNavigate();


  const [info, setInfo] = useState([]);
  const [rocketinfo, setRocketInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(10);
  let postPerPage = useRef(10)
  // const [loading, setLoading] = useState(false);

  useEffect(() => {

    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // },0);

    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => setInfo(response.data))
      .catch((err) => {
        console.log("🚀 ~ useEffect ~ err:", err);
      });
  }, []);

  const lastPostIndex = currentPage * postPerPage.current;
  const firstPostIndex = lastPostIndex - postPerPage.current;
  const currentPosts = rocketinfo.slice(firstPostIndex, lastPostIndex);

  // const color = "black"; 

  useEffect(() => {
    // Filter the rocket information based on rocket_id
    const filteredRocketInfo = info.filter((ele) => ele.rocket.rocket_id === id);
    
    // Set the filtered rocket information to rocketinfo state
    setRocketInfo(filteredRocketInfo);
  }, [id, info]);


  
  const handleBooking = (rocketId, launchDate) => {
    // Navigate to the ConfirmationPage and pass both Rocket ID and Launch Date as parameters
    navigate(`/ConfirmationPage/${rocketId}/${launchDate}`);
  };


  return (
    <div className="Cont2">
     <h1>Booking </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Rocket ID</th>
            <th>Launch date</th>
            <th>Booking</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((object, index) => (
            <tr key={index}>
              <td>{object.rocket.rocket_id}</td>
              <td>{object.launch_date_local}</td>
              <td>
                 <Button onClick={() => handleBooking(object.rocket.rocket_id, object.launch_date_local)}>
                  {/* <Link to={`./ConfirmationPage`}>Book Now</Link> */} Book Now
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <Pagination
          totalPosts={rocketinfo.length}
          postPerPage={postPerPage.current}
          
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

    </div>
  );
};
