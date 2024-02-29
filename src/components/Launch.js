
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { ClipLoader } from "react-spinners"; // Import ClipLoader
import Pagination from "./pagination";
import "../components/Launch.css";

function Launch() {
  const [Info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(10);
  let postPerPage = useRef(10)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },0);

    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => setInfo(response.data))
      .catch((err) => {
        console.log("🚀 ~ useEffect ~ err:", err);
      });
  }, []);

  console.log("Info....", Info);

  const lastPostIndex = currentPage * postPerPage.current;
  const firstPostIndex = lastPostIndex - postPerPage.current;
  const currentPosts = Info.slice(firstPostIndex, lastPostIndex);


  const color = "black"; 
  // const override = `
  //   display: block;
  //   margin: 0 auto;
  //   border-color: red;
  // `; 

  return (
    <div className="Cont2">
      <h1>Launches</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Mission Name</th>
            <th>Param</th>
            <th>Launch Date(Local Time)</th>
            <th>Launch year</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5">
                <div style={{position : "relative" , left : "30vw"}}>
                <ClipLoader
                // style={{position : "relative", left : "50px"}}
                  color={color}
                  loading={loading}
                  
                  size={100}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                </div>
              </td>
            </tr>
          ) : (
            currentPosts.map((launch, index) => (
              <tr key={index}>
                <td>{launch.flight_number}</td>
                <td>{launch.mission_name}</td>
                <td>{launch.rocket.rocket_id}</td>
                <td>{launch.launch_date_local}</td>
                <td>{launch.launch_year}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination">
        <Pagination
          totalPosts={Info.length}
          postPerPage={postPerPage.current}
          
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Launch;

