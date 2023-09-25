import React from "react";

const DonationCard = ({ data }) => {
  const { picture, title, category, card_bg, category_bg, text_color, price } =
    data || {};

  return (
    <div>
      <div
        style={{ background: card_bg }}
        className="card card-side bg-base-100 shadow-xl"
      >
        <figure>
          <img src={picture} alt="" />
        </figure>
        <div className="card-body">
          <div className="card-actions ">
            <h2
              style={{ backgroundColor: category_bg }}
              className={`  rounded-md font-semibold`}
            >
              {category}
            </h2>
          </div>
          <h2 className={`card-title `}>{title}</h2>
          <h4 style={{ color: text_color }}> {price}</h4>
          <div>
            <button
              style={{ background: text_color }}
              className="py-2 px-4 rounded text-white"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
