import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import { useEffect, useState } from "react";

const SingleCard = ({ card }) => {
  const { _id, picture, title } =
    card || {};


    const [data, setData] =useState([]);
    const [category, setCategory] =useState([]);
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  console.log(category);

  useEffect(() =>{
    const filter = data.filter((data) => data.category === card.category)
    console.log(filter);
    
  },[data, card])


  return (
   <div>
    <Link to={`/details/${_id}`}>
    <div className=" cursor-pointer max-[330px]:mx-4 max-[380px]:mx-6 mx-14 md:mx-0 ">
      <div style={{ background:category?.card_bg,  color:category?.text_color}} className={`card card-compact  shadow-xl  bg-opacity-10`} >
        <figure>
          <img 
            src={picture}
            alt=""
          />
        </figure>
        <div className="card-body h-32">
        <div className="card-actions  ">
            <h2 style={{ backgroundColor:category?.category_bg }} className= {` py-1 px-2 rounded-md font-semibold`}>{category}</h2>
          </div>
          <h2 style={{color:category?.text_color }} className={` text-lg font-semibold `}>{title}</h2>
          
         
        </div>
      </div>
    </div>
    </Link>
   </div>
  );
};
SingleCard.propTypes = {
  card: propTypes.array
}

export default SingleCard;
