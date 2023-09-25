
import  { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';

import  Chart  from "react-apexcharts";


const Statistic = () => {

    const data= useLoaderData()
    const [donation, setDonation] = useState([]);

    useEffect(() => {
        const donatesItem = JSON.parse(localStorage.getItem("donate"));
        
          setDonation(donatesItem);
       
      }, []);
      console.log(donation.length);
      const totalDonation= data.length - donation.length  ;
      const myDonation = donation.length;




    const donationArray = [totalDonation, myDonation ];
    console.log(donationArray);
      
   
    return (
        <div >
          
           
            <div className=' my-20  mx-60'>
                
               <div>
               <Chart
                type="pie"
                width={550}
                height={550}

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