import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/usePublic';
import { useQuery } from '@tanstack/react-query';
import VRow from './VRow';

const VolunteerShow = () => {

    const data1 = useLoaderData();
    console.log(data1);
    const id = data1?._id

    const axiosPublic = useAxiosPublic();
    const { data: volunteer = [], refetch } = useQuery({
      queryKey: ["volunteer", id],
      queryFn: async () => {
        const res = await axiosPublic.get(`/volunteer/event?eventID=${id}`);
        return res.data;
      },
    });

    return (
        <div>
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
  
              {volunteer?.map((data) => (
                <VRow
                  key={volunteer._id}
                  volunteer={data}
                  data1 ={data1}
                  refetch={refetch}

                
                
                  
                />
              ))}
            </tbody>
          </table>
        </div>
 
            
        </div>
    );
};

export default VolunteerShow;