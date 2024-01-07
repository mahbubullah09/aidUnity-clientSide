
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";


const EventRow = ({ event, handleDelete }) => {
 
  
  const {
    title,
    _id
   
   
  } = event;


  const id = _id;
  console.log(id);

 



 

  return (
    <tr>
      <td>
        <div className="  space-x-3">{event?.title}</div>
      </td>
      
      <th>
   
          <div className="flex flex-col gap-2">
         
            <button className="text-center">
            {event?.date}
            </button>
        
            
             
           

           
          </div>
        
      </th>

      <th>
        <div className="flex flex-col gap-2">
        <button
              onClick={() => handleDelete(event?._id)}
              className="w-24 bg-[#FF3811] py-2 px-4 rounded text-white"
            >
              Delete
            </button>
        
            <Link to={`/updateevents/${event?._id}`}>
          <button  className="w-24 bg-[#FF3811] py-2 px-4 rounded text-white">
               Update
              </button>
              </Link>
         
        </div>
      </th>
    </tr>
  );
};

export default EventRow;
