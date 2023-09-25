import  { useEffect, useState } from 'react';
import DonationCard from './donationCard';

const Donation = () => {

    const [donation, setDonation]= useState([])
    const [noData, setNodata] = useState()
    const [click, isClick] = useState(false)

    console.log(click);

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
        <div className='my-8' >
            {
                noData ? <div className='  text-center h-screen my-60'>
                    <p className='   text-6xl font-bold'>{noData}</p> 
                </div>
                : <div>
                    <div className='grid grid-cols-2 gap-4'>
                    {
                       click ?  donation.map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                       :  donation.slice(0,4).map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                    }
                     
                </div>
                <div className=' text-center my-10'>
            <button onClick={()=> isClick(true)}  className={
              click ?  " hidden" : " rounded bg-[#009444] text-white py-2 px-4  mx-auto " 
            }>
                Show all
         
                </button>
            </div>

                </div>
            }
            
            
        </div>
    );
};

export default Donation;