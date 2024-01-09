import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/usePublic';
import { useQuery } from '@tanstack/react-query';

const VolunteerRow = ({event, handleDelete}) => {
  
    const {
        title,
        _id
       
       
      } = event;
    
    
      const id = _id;
      console.log(id);

      const axiosPublic = useAxiosPublic();
      const { data: volunteer = [] } = useQuery({
        queryKey: ["volunteer", id],
        queryFn: async () => {
          const res = await axiosPublic.get(`/volunteer/event?eventID=${id}`);
          return res.data;
        },
      });

      console.log(volunteer);
     
    
    
    
     
    
      return (
        <tr>
          <td>
            <div className="  space-x-3">{event?.title}</div>
          </td>
          
          <th>
       
              <div className="flex flex-col gap-2">
             
                <button className="text-center">
                {volunteer?.length}
                </button>
            
                
                 
               
    
               
              </div>
            
          </th>
    
          <th>
            <div className="flex flex-col gap-2">
            <Link to={`/volunteers/${event?._id}`}>
          <button  className="w-24 bg-[#FF3811] py-2 px-4 rounded text-white">
               See Volunteer
              </button>
              </Link>
             
             
            </div>
          </th>
        </tr>
      );
    };

export default VolunteerRow;