import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const VRow = ({ data1, volunteer, refetch }) => {
  console.log('df',data1);
  console.log(volunteer);

  const id = volunteer?._id
  console.log(id);
    const volunteerInfo = {
      eventID: data1?._id,
      volunteerName: volunteer?.volunteerName,
      volunteerEmail: volunteer?.volunteerEmail,
      volunteerImage: volunteer?.volunteerImage,
      Status: "Accept",
    };

  const handleApprove = () => {
  
    console.log(volunteerInfo);


    fetch(`https://aid-unity-server.vercel.app/volunteer/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(volunteerInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Congaratulations",
              text: "Volunteer Accepted!",
            });
            refetch()
          }
        });
  };

  return (
    <tr>
      <td>
        <div className="  space-x-3">{volunteer?.volunteerName}</div>
      </td>

      <th>
        <div className="flex flex-col gap-2">
          <p className="text-center">{volunteer?.volunteerEmail}</p>
        </div>
      </th>

      <th>
        <div className="flex flex-col gap-2">
         { volunteer?.Status === 'pending'?
           <button
           onClick={handleApprove}
           className="w-24 bg-[#FF3811] py-2 px-4 rounded text-white"
         >
           Approve
         </button>
         :
         <button
         
         className="w-24 bg-slate-600 py-2 px-4 rounded text-white"
       >
         Approved
       </button>
         }
        </div>
      </th>
    </tr>
  );
};

export default VRow;
