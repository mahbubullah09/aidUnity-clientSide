import AddTask from './AddTask';
import DashOpt from './DashOpt';

const AddTaskDash = () => {
    return (
        <div className=' lg:grid grid-cols-3'>
            

            <div className='lg:grid-cols-1'>
                <DashOpt/>
            </div>

            <div className='lg:grid-cols-2'> 
                <AddTask/>
            </div>
        </div>
    );
};

export default AddTaskDash;