import propTypes from 'prop-types';
import { BiDollar} from "react-icons/bi";
import { Link } from 'react-router-dom';
import swal from "sweetalert";

const DetailsCard = ({ data }) => {
  const {id, picture, title, text_color, description, price } = data || {};

  const handleAddDonate= () => {

    const donateItemArray = [];
    const donateItem= JSON.parse(localStorage.getItem('donate'));
    
  
    if (!donateItem){
        donateItemArray.push((data))
        localStorage.setItem('donate', JSON.stringify(donateItemArray))
        swal("Good job!", "Donattion Succesfull!", "success");
    }
   
    else{

        const isExist = donateItem.find(item => item.id ===id);
        
        if(!isExist){
            donateItemArray.push(...donateItem, data)
            localStorage.setItem('donate', JSON.stringify(donateItemArray))
            swal("Good job!", "Donattion Succesfull!", "success");

        }
        else{
            swal("stop!", "already donate!", "error");
        }

      

    }
    console.log(donateItemArray);
    console.log(donateItem);
   
    

    // localStorage.setItem('donate', JSON.stringify(data))



  }
  return (
    <div className="  card card-compact my-8 mx-4  md:max-w-2xl  lg:max-w-4xl min-[1100px]:max-w-5xl md:mx-auto">
      <div className="relative">
        <img className=" w-full mx-auto" src={picture} alt="" />
        <div className="card-actions bg-black bg-opacity-30 py-4 px-4 absolute  w-full bottom-0">
        <Link to={`/payment/${data?._id}`}>
        <button  className={` bg-red-600 text-white py-2 px-4  rounded`}>
           <div className='flex items-center'> Donate  <div className='flex items-center'><BiDollar></BiDollar>{price}</div></div>
          </button>
        </Link>
        </div>
      </div>

      <div >
        <h4 className=" text-[24px] md:text-[40px] font-semibold mt-4 ">{title}</h4>
        <p className="text-[#0B0B0BB2] text-sm md:text-base  my-2">{description}</p>
      </div>
    </div>
  );
};
DetailsCard.propTypes = {
  data: propTypes.object
}

export default DetailsCard;
