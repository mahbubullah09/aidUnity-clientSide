import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/usePublic";
import PaymentRow from "./PaymentRow";
import { useQuery } from "@tanstack/react-query";







const ManagePayment = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payments`);
      return res.data;
    },
   
  });

const [totalAmpunt,setTotalAmount]= useState()

useEffect(()=> {
    const sum = payments?.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price; }, 0);
     
        setTotalAmount(sum);
},[payments])

console.log(totalAmpunt);



  return (
    <div>
      {/* <Helmet>
        <title>RoomJet-My products</title>
      </Helmet> */}

      <div className="overflow-x-auto my-20">
        <div className="my-6">
            <h3 className="font-bold">Total Amount: {totalAmpunt}</h3>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Aid Name</th>              
              <th>Aid Category</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {payments.map((payment) => (
              <PaymentRow
                key={payment._id}
                payment={payment}
              
              
                
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePayment;
