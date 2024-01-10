import React, { useContext, useEffect, useState } from "react";
import TimeAgo from "timeago-react";
import { AuthContext } from "../component/Provider/AuthProvider";
import Swal from "sweetalert2";

const EventsCard = ({ data , volunteer, refetch}) => {
    const {user} = useContext(AuthContext)

    console.log(volunteer);
    console.log(data);

    const id = data?._id;
   const eventID = volunteer[0]?.eventID

   console.log(id, eventID);

    const [request, setRequest] = useState([])

    useEffect(() => {
        const findData = volunteer?.filter((data1) => data1.eventID === data?._id)
        setRequest(findData);
    },[volunteer, data])
    console.log(request);

    const [requested, setRequested] = useState([])
    useEffect(() => {
        const findVolunteer = request?.find((data1) => data1.volunteerEmail === user?.email)
        setRequested(findVolunteer);
        console.log('ghweurgh',findVolunteer);
    },[request,user])
    console.log(requested);

 



    const handleVolunteer =() =>{

        const volunteerInfo ={
            eventID: data?._id,
            volunteerName: user?.displayName,
            volunteerEmail: user?.email,
            volunteerImage: user?.photoURL,
            Status: 'pending'

        }

        console.log(volunteerInfo);

        fetch(`https://aid-unity-server.vercel.app/volunteer`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(volunteerInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
      
              if (data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Volunteet added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                refetch()
              }
            });

    }
  return (
    <div>
      <div className="my-20">
        <div className="container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg w-full mx-auto">
          <div className="text-3xl font-bold mb-4">{data?.title}</div>
          <div className="text-lg mb-4">
            Date:
            <span className="text-yellow-400 font-bold">
              {data?.date} &#40; <TimeAgo datetime={data?.date}></TimeAgo>&#41;
            </span>
          </div>
          <div className="text-lg mb-4">{data?.description}</div>

          <div>
            {
              !requested ?
               <button onClick={handleVolunteer} className="bg-amber-400 text-black py-2 px-4 font-bold">Request for Volunteer</button>

               :
              <div>
                {
                  requested?.Status === 'pending' ?
                  <button  className="bg-amber-400 text-black py-2 px-4 font-bold">Requested for Volunteer</button>
                  : 
                  <button  className="bg-amber-400 text-black py-2 px-4 font-bold">Request accept</button>
                }
              </div>
            
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
