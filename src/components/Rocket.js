
import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios';
import { ClipLoader } from "react-spinners";
import "../components/rocket.css"
// import Pagination from "./pagination";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Booking } from './Booking';

function Rocket() {
  const [Info, setInfo] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(10);
  // let postPerPage = useRef(10)
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },0);


    axios
      .get("https://api.spacexdata.com/v3/rockets")
      // .then(Response => console.log("------------",Response))
      .then((e) => setInfo(e.data))

      .catch((err) => console.log("err...", err));
  }, []);

  console.log("Info....", Info);

  // const lastPostIndex = currentPage * postPerPage.current;
  // const firstPostIndex = lastPostIndex - postPerPage.current;
  // const currentPosts = Info.slice(firstPostIndex, lastPostIndex);


  const color = "black"; 


  return (
    <div className='Cont-2'>
      <h1>Rockets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Rocket-ID</th>
            
            <th>Booking</th>
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
            Info.map((Object, index) => (
              <tr key={index}>
                <td>{Object.id}</td>
                <td>{Object.rocket_id}</td>
                <td> <Button>  <Link  to={`./${Object.rocket_id}`}> Book Now</Link>  </Button></td> 
              </tr>
            ))
          )}
        </tbody>
      </table>
{/*</div>
      <div className="pagination">
        {/* <Pagination
          totalPosts={Info.length}
          postPerPage={postPerPage.current}
          
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />*
      </div>
     */}
    
    </div>
  )
}

export default Rocket;
