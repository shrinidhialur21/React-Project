// import React from 'react'
// import { useState,useEffect } from 'react'
// import axios from 'axios';
// import "../components/missions.css"
// import Pagination from './pagination';

// function Missions() {

//   const [Info, setInfo] = useState([]);
//   const [currentPage, setCurrentPage]= useState(1)
//   const[postPerPage , setPostPerPage]= useState(15)

//   useEffect(() => {
//     axios
//       .get("https://api.spacexdata.com/v3/launches")
//       // .then(Response => console.log("------------",Response))
//       .then((e) => setInfo(e.data))

//       .catch((err) => console.log("err...", err));
//   }, []);

//   console.log("Info....", Info);

//   const lastPostIndex = currentPage * postPerPage
//   const firstPostIndex =  lastPostIndex - postPerPage
//   const currentPosts = Info.slice(firstPostIndex , lastPostIndex)
//   return (
    
//     <div className='Cont3'>
//       <h1>Missions</h1>
//       <table className='table2'> 
//       <tr>
//         <th>flight_number</th>
//         <th>Mission Name</th>
//         <th>Mission-ID</th>
//         <th>rocket_id</th>
//         <th>Launch Site</th>
//       </tr>
//       {currentPosts.map((Object , index)=>{
//         return(
          
//           <tr>
//               {/* <td>{Object.mission_name}</td> */}
//               <td>{Object.flight_number}</td>
//               <td>{Object.mission_name === "" ? "NA" :Object.mission_name}</td>
//               <td>{Object.mission_id.length === 0 ? "NA" :Object.mission_id}</td>
//               <td>{Object.rocket.rocket_id}</td>
//               <td>{Object.launch_site.site_name_long}</td>
//             </tr>

//         )
//       })}
//       </table>
//       <div className="pagination">
//       <Pagination totalPosts={Info.length}
//            postPerPage={postPerPage}
//            setCurrentPage={setCurrentPage}
//            currentPage={setCurrentPage}
//            />
//            </div>
    
    
//     </div>
//   )
// }

// export default Missions

import React, { useState, useEffect,useRef} from 'react';
import axios from 'axios';
import "../components/missions.css";
import Pagination from './pagination';
import { ClipLoader } from "react-spinners"; // Import ClipLoader

function Missions() {
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
      .catch((err) => console.log("err...", err));
  }, []);

  console.log("Info....", Info);

  const lastPostIndex = currentPage * postPerPage.current;
  const firstPostIndex = lastPostIndex - postPerPage.current;
  const currentPosts = Info.slice(firstPostIndex, lastPostIndex);

  const color = "black"; 

  return (
    <div className='Cont3'>
      <h1>Missions</h1>
      <table className='table2'>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Mission Name</th>
            <th>Mission ID</th>
            <th>Rocket ID</th>
            <th>Launch Site</th>
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
                <td className='td-class'>{Object.flight_number}</td>
                <td className='td-class'>{Object.mission_name === "" ? "NA" : Object.mission_name}</td>
                <td className='td-class'>{Object.mission_id.length === 0 ? "NA" : Object.mission_id}</td>
                <td className='td-class'>{Object.rocket.rocket_id}</td>
                <td className='td-class'>{Object.launch_site.site_name_long}</td>
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

export default Missions;
