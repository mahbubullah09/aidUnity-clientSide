import React, { useContext } from "react";
import { TbClockBolt } from "react-icons/tb";
import TimeAgo from "timeago-react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { AuthContext } from "../component/Provider/AuthProvider";
import { IoSend } from "react-icons/io5";

const PostsCards = ({ data }) => {

    const {user} = useContext(AuthContext)
    console.log(user);
  return (
    <div className="bg-slate-200 p-6 rounded-2xl my-4 space-y-4">
      <div className="flex items-center gap-2 space-y-1">
        <img className="w-12 rounded-full" src={data?.userImage} alt="" />
        <div>
          <h2 className="font-bold text-lg">{data?.userName}</h2>
          <p className="flex items-center text-xs gap-1">
            {" "}
            <TbClockBolt /> <TimeAgo datetime={data?.time} />{" "}
          </p>
        </div>
      </div>

      <div className="space-y-1">
        <h2 className="font-bold text-xl">{data?.title}</h2>
        <p className="font-medium text-lg">{data?.details}</p>
        <img className="w-full" src={data?.image} alt="" />
      </div>
      <hr className="text-black" />
      <div className="flex justify-between items-center text-4xl">
        <div className="flex gap-4">
          <div className=" flex items-center gap-2">
            <button>
              {" "}
              <AiOutlineLike />
            </button>
            {data?.like}
          </div>
          <div className=" flex items-center gap-2">
            <button>
              <AiOutlineDislike />
            </button>
            {data?.dislike}
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <button>
            {" "}
            <FaCommentAlt />
          </button>
          {data?.dislike}
        </div>
      </div>
      <hr />

      <div className="flex items-center gap-2 w-full pr-16">
        <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
    <div className="w-full">
    <form action="">
       <input className="w-full h-8 rounded-full p-2" placeholder="Comment here..." type="text" />
       </form>
    </div>
       <button><IoSend /></button>
      </div>
    </div>
  );
};

export default PostsCards;
