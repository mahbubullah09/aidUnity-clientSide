
import AddAids from '../AddAids';
import DashOpt from '../DashOpt';
import AddEvent from './AddEvent';

const EventDash = () => {
    return (
        <div className=' flex  '>
            

        <div className=''>
            <DashOpt/>
        </div>

        <div className="flex-1"> 
            <AddEvent/>
        </div>
    </div>
    );
};

export default EventDash;