import AddTask from './AddTask';
import DashOpt from './DashOpt';
import UpdateTask from './UpdateTask';

const UpdateTaskDash = () => {
    return (
        <div className=' lg:grid grid-cols-3'>
            

            <div className='lg:grid-cols-1'>
                <DashOpt/>
            </div>

            <div className='lg:grid-cols-2'> 
                <UpdateTask/>
            </div>
        </div>
    );
};

export default UpdateTaskDash;