import React from 'react';
import DashOpt from '../../DashOpt';
import ManagePayment from './ManagePayment';

const PaymentDash = () => {
    return (
        <div>
             <div className='flex flex-col lg:flex-row max-w-6xl'>
            

            <div >
                <DashOpt/>
            </div>

            <div className> 
               <ManagePayment/>
            </div>
        </div>
        </div>
    );
};

export default PaymentDash;