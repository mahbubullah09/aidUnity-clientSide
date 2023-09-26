
import  { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';

import  Chart  from "react-apexcharts";


const Statistic = () => {

    const data= useLoaderData()
    const [donation, setDonation] = useState([]);
    const [donationLength, setDonationLength] = useState(0);


let totalDonation;
let myDonation =0;
 if (donation){
    totalDonation= data?.length - donation?.length  ;
    myDonation = donation.length;
 } else{
    totalDonation = data.length - 0
 }
   
    

    useEffect(() => {
        const donatesItem = JSON.parse(localStorage.getItem("donate"));

        
          setDonation(donatesItem);
          setDonationLength(myDonation)
       
      }, [myDonation]);
  




    const donationArray = [totalDonation, donationLength ];
    console.log(donationArray);
      
   
    return (
        <div >
          
           
            <div className=' md:mx-36 md:my-20 lg:my-20 max-w-[600px]  lg:mx-60'>
                
               <div>
               <Chart
                type="pie"
               series={ donationArray}                

                options={{
                      
                                            
                      colors:["#FF444A","#00C49F"],
                      labels:['Total Donation', 'Your Donation']                   

                 }}
                >
                </Chart>
               </div>
            </div>
      
        </div>
    );
};

export default Statistic;