import { useEffect, useState } from 'react';
import DashOpt from './DashOpt';
import Task from './Task';

const Dashboard = () => {


    return (
        <div className='flex flex-col lg:flex-row max-w-6xl'>
            

            <div >
                <DashOpt/>
            </div>

            <div className='flex-1'> 
                <Task/>
            </div>
        </div>
    );
};

export default Dashboard;