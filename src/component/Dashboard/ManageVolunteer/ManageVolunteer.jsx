import React, { useContext, useEffect, useState } from 'react';
import VolunteerRow from './VolunteerRow';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ManageVolunteer = () => {
    const { user } = useContext(AuthContext);
    const [event, setevent] = useState([]);
    console.log(event);
    const url = `https://aid-unity-server.vercel.app/events`;
  
    useEffect(() => {
  
  
      fetch(url)
        .then((res) => res.json())
        .then((data) => setevent(data));
    }, [url]);
  
    console.log(event);
  
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://aid-unity-server.vercel.app/events/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
  
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Events has been deleted.", "success");
                const remaining = event.filter(
                  (event) => event._id !== id
                );
  
                setevent(remaining);
              }
            });
        }
      });
    };
  
  
  
    return (
      <div>
        {/* <Helmet>
          <title>RoomJet-My products</title>
        </Helmet> */}
  
        <div className="overflow-x-auto my-20">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>              
                <th>Volunteer Requiest</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
  
              {event.map((event) => (
                <VolunteerRow
                  key={event._id}
                  event={event}
                  handleDelete={handleDelete}
                
                  
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default ManageVolunteer;