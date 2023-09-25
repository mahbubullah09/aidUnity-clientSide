import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const { id, picture, title, category, card_bg, category_bg, text_color } =
    card || {};

  return (
   <div>
    <Link to={`/details/${id}`}>
    <div className=" cursor-pointer">
      <div style={{ background:card_bg }} className={`card card-compact  shadow-xl  bg-opacity-10`} >
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
        <div className="card-actions ">
            <h2 style={{ backgroundColor:category_bg }} className= {` py-1 px-2 rounded-md font-semibold`}>{category}</h2>
          </div>
          <h2 style={{color:text_color }} className={`card-title `}>{title}</h2>
          
         
        </div>
      </div>
    </div>
    </Link>
   </div>
  );
};

export default SingleCard;
