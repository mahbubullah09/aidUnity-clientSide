import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../component/Hooks/usePublic';
import EventsCard from './EventsCard';

const Events = () => {

    const axiosPublic = useAxiosPublic();   
  const { data: events = [] } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/events`);
      return res.data;
    },
   
  });
  const { data: volunteer = [] } = useQuery({
    queryKey: ["volunteer"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/volunteer`);
      return res.data;
    },
   
  });
  console.log(events);
    return (
        <div>

            {
                events.map((data) => <EventsCard key={data?._id} data={data} volunteer={volunteer}/>)
            }

            
            
        </div>
    );
};

export default Events;