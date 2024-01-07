
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";


const AidsRow = ({ aids, handleDelete }) => {
 
  
  const {
    title,
    _id
   
   
  } = aids;


  const id = _id;

 



 

  return (
    <tr>
      <td>
        <div className="  space-x-3">{aids?.title}</div>
      </td>
      
      <th>
   
          <div className="flex flex-col gap-2">
         
            <button className="text-center">
            {aids?.category}
            </button>
        
            
             
           

           
          </div>
        
      </th>

      <th>
        <div className="flex flex-col gap-2">
        <button
              onClick={() => handleDelete(aids?._id)}
              className="w-24 bg-[#FF3811] py-2 px-4 rounded text-white"
            >
              Delete
            </button>
        
            <Link to={`updatecoupon/${aids?._id}`}>
          <button  className="w-24 bg-[#FF3811] py-2 px-4 rounded text-white">
               Update
              </button>
              </Link>
         
        </div>
      </th>
    </tr>
  );
};

export default AidsRow;
