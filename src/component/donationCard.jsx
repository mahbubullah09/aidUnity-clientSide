import { BiDollar} from "react-icons/bi";

const DonationCard = ({ data }) => {
  const { picture, title, category, card_bg, category_bg, text_color, price } =
    data || {};

  return (
    <div>
      <div>
        <div style={{ background: card_bg }} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={picture}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="card-actions ">
              <h2
                style={{ backgroundColor: category_bg, color:text_color }}
                className={`  rounded-md font-semibold py-1 px-2 `}
              >
                {category}
              </h2>
            </div>
            <h2 className={`card-title my-2 `}>{title}</h2>
            <div style={{ color: text_color }} className=" flex items-center  font-semibold"> <BiDollar></BiDollar> {price}</div>
            <div>
              <button
                style={{ background: text_color }}
                className="py-2 px-4 rounded text-white mt-2"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default DonationCard;
