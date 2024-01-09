import React from 'react';
import DashOpt from '../DashOpt';
import ManageVolunteer from './ManageVolunteer';

const VolunteerDash = () => {
    return (
        <div className=' flex  '>
            

        <div className=''>
            <DashOpt/>
        </div>

        <div className="flex-1"> 
            <ManageVolunteer/>
        </div>
    </div>
    );
};

export default VolunteerDash;