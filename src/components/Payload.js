import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import "../components/payload.css";
import Pagination from "./pagination";
import { ClipLoader } from "react-spinners"; // Import ClipLoader

function Payload() {
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
      .get("https://api.spacexdata.com/v3/payloads")
      .then((response) => setInfo(response.data))
      .catch((err) => console.log("err...", err));
  }, []);

  console.log("Info....", Info);

  const lastPostIndex = currentPage * postPerPage.current;
  const firstPostIndex = lastPostIndex - postPerPage.current;
  const currentPosts = Info.slice(firstPostIndex, lastPostIndex);


  const color = "black"; 

  return (
    <div className='Cont3'>
      <h1>Payload</h1>
      <table className='table2'>
        <thead>
          <tr>
            <th>Payload-ID</th>
            <th>Manufacturer</th>
            <th>Payload Type</th>
            <th>payload_mass_kg</th>
            <th>Nationality</th>
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
            currentPosts.map((Object, index) => (
            <tr key={index}>
              <td>{Object.payload_id}</td>
              <td>{Object.manufacturer}</td>
              <td>{Object.payload_type}</td>
              <td>{Object.payload_mass_kg == null ? "NA" : Object.payload_mass_kg}</td>
              <td>{Object.nationality}</td>
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

export default Payload;
