import  { useEffect, useState } from 'react';
import DonationCard from './donationCard';

const Donation = () => {

    const [donation, setDonation]= useState([])
    const [noData, setNodata] = useState()


    useEffect( ()=> {
        const donatesItem= JSON.parse(localStorage.getItem('donate'))
         if(donatesItem){
            setDonation(donatesItem);
         }
         else {
           setNodata('No data found')
         }



    }, [])
    console.log(donation);


    return (
        <div>
            {
                noData ? <p>{noData}</p> 
                : <div className='grid grid-cols-2 gap-4'>
                    {
                        donation.map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                    }
                </div>
            }
            
        </div>
    );
};

export default Donation;