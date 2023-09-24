import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const { id, picture, title, category, card_bg, category_bg, text_color } =
    card || {};

  return (
   <div>
    <Link to={`/details/${id}`}>
    <div className=" cursor-pointer">
      <div className={`card card-compact  shadow-xl bg-[${card_bg}] bg-opacity-10`} >
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
        <div className="card-actions ">
            <h2 className= {`bg-[${category_bg}] py-1 px-2 rounded-md font-semibold`}>{category}</h2>
          </div>
          <h2 className={`card-title text-[${text_color}]`}>{title}</h2>
          
         
        </div>
      </div>
    </div>
    </Link>
   </div>
  );
};

export default SingleCard;
