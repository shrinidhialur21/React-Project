// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// export default function BasicPagination() {
//   return (
//     <Stack spacing={2}>
//       <Pagination count={10} />
//       <Pagination count={10} color="primary" />
//       <Pagination count={10} color="secondary" />
//       <Pagination count={10} disabled />
//     </Stack>
//   );
// }
import React from "react";
import "../components/pagination.css"

const Pagination = ({totalPosts , postPerPage , setCurrentPage , currentPage}) => {
    let pages = [];

    for(let i = 1; i<= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }
    return(
        <div className="pagination">
            {
                pages.map(( page, index) =>{
                    return<button key = {index} onClick={() => setCurrentPage(page)}  className = {page === currentPage ? 'active' : ''} >  {  page  }  </button>
                })
            }
        </div>
    )
}

export default Pagination