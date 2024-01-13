import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosPublic from '../component/Hooks/usePublic';
import EventsCard from './EventsCard';
import { AuthContext } from '../component/Provider/AuthProvider';

const Events = () => {

  const {user} = useContext(AuthContext)
  const UEmail = user?.email

    const axiosPublic = useAxiosPublic();   
  const { data: events = [] } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/events`);
      return res.data;
    },
   
  });


  const { data: volunteer = [], refetch } = useQuery({
    queryKey: ["volunteer"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/volunteer/event/email?emailID=${UEmail}`);
      return res.data;
    },
   
  });

    return (
        <div>

            {
                events.map((data) => <EventsCard key={data?._id} data={data} volunteer={volunteer} refetch={refetch} />)
            }

            
            
        </div>
    );
};

export default Events;