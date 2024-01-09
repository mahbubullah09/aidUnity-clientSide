import { BiDollar } from "react-icons/bi";
import propTypes from "prop-types";
import { useEffect, useState } from "react";

const DonationCard = ({ data }) => {
  const { picture, title,  card_bg, category_bg, text_color, price } =
    data || {};

    const [Category, setCategory] =useState([]);
    const [data1, setData] =useState([]);
    useEffect(() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
    },[])

    console.log(data);
    console.log(data1);
  
    useEffect(() =>{
      const filter = data1.find((data1) => data1.category == data.aidInfo.category)
      setCategory(filter);
      console.log(filter);
      
    },[data1, data])
    console.log(Category);
  

  return (
    <div>
      <div>
        <div
          style={{ background: Category?.card_bg }}
          className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={data?.aidInfo?.picture}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6">
            <div className="card-actions ">
              <h2
                style={{ backgroundColor: Category?.category_bg, color: Category?.text_color }}
                className={`  rounded-md font-semibold py-1 px-2 `}
              >
                {data?.aidInfo?.category}
              </h2>
            </div>
            <h2 className={` text-[18px] font-semibold my-2  text-[#0B0B0B]`}>
              {data?.aidInfo?.title}
            </h2>
            <div
              style={{ color: Category?.text_color }}
              className=" flex  items-center  font-semibold"
            >
              {" "}
              <BiDollar></BiDollar>
              {data?.aidInfo?.price}
            </div>
            <div>
              {/* <button
                style={{ background: text_color }}
                className="py-2 px-4 rounded text-white mt-2"
              >
                View Details
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  data: propTypes.array,
};

export default DonationCard;
