import { useEffect, useState } from "react";
import DonationCard from "./donationCard";
import useAxiosPublic from "./Hooks/usePublic";
import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";

const Donation = () => {

  const [click, isClick] = useState(false);

  const axiosPublic = useAxiosPublic();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payments`);
      return res.data;
    },
   
  });
  console.log(payments);



  return (
    <div className="my-8 md:max-w-2xl  lg:max-w-4xl min-[1100px]:max-w-5xl mx-auto">
      {!payments ? (
        <div className="  text-center h-screen my-60">
          <p className="   text-6xl font-bold">{noData}</p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 mx-2 md:mx-16 lg:grid-cols-2 lg:mx-0 gap-4">
            {click
              ? payments.map((data) => (
                  <DonationCard key={data._id} data={data}></DonationCard>
                ))
              : payments
                  .slice(0, 4)
                  .map((data) => (
                    <DonationCard key={data._id} data={data}></DonationCard>
                  ))}
          </div>
          {
            data.length > 4 ? <div
            className="text-center my-10"
            >
            <button
              onClick={() => isClick(true)}
              className={
                click
                  ? " hidden"
                  : " rounded bg-[#009444] text-white py-2 px-4  mx-auto "
              }
            >
              Show all
            </button>
          </div> 

          : ''

          }
        </div>
      )}
    </div>
  );
};

export default Donation;
