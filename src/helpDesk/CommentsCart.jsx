import React from "react";
import TimeAgo from "timeago-react";

const CommentsCart = ({ data }) => {
  return (
    <div>
      <div className="flex items-start gap-4">
        <img className="w-10 rounded-full " src={data?.userImage} alt="" />
        <div>
        <div className="bg-white pb-4 px-4 rounded-2xl max-w-2xl ">
          <p className=" font-bold">{data?.userName} </p>
          <p>{data?.comment}</p>
        </div>
        <div className=" p-2 text-[10px]">
          <TimeAgo datetime={data?.time}></TimeAgo>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsCart;
