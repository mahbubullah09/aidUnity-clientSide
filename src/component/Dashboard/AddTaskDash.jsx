import AddAids from './AddAids';
import DashOpt from './DashOpt';

const AddAidsDash = () => {
    return (
        <div className=' flex  '>
            

            <div className=''>
                <DashOpt/>
            </div>

            <div className="flex-1"> 
                <AddAids/>
            </div>
        </div>
    );
};

export default AddAidsDash;