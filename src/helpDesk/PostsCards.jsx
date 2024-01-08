import React, { useContext, useState } from "react";
import { TbClockBolt } from "react-icons/tb";
import TimeAgo from "timeago-react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { AuthContext } from "../component/Provider/AuthProvider";
import { IoSend } from "react-icons/io5";
import moment from "moment";
import Swal from "sweetalert2";
import useAxiosPublic from "../component/Hooks/usePublic";
import { useQuery } from "@tanstack/react-query";
import CommentsCart from "./CommentsCart";

const PostsCards = ({ data , RF}) => {
  const [clicked, setClicked] = useState(false);
  const { user } = useContext(AuthContext);
  const id = data?._id;
  console.log(id);

  const axiosPublic = useAxiosPublic();

  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments/posts?postID=${id}`);
      return res.data;
    },
  });
  console.log(comments);
  const time = moment().format("YYYY-MM-DD h:mm:ss a");
  const newLike = data?.like + 1;
  console.log(newLike);
  const handleLike = () => {
    const UpdateInfo = {
      title: data?.title,

      image: data?.image,

      details: data?.details,

      userImage: data?.userImage,

      userName: data?.userName,

      time: data?.time,

      like: newLike,

      dislike: data?.dislike,
    };



    fetch(`http://localhost:5000/posts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        RF()

    
      });

      const postInfo = {
     email: user?.email,
     postID: id
    }
    console.log(postInfo);

    fetch("http://localhost:5000/likes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(postInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Like added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch()
          }
        });
  };

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    e.target.comment.value = "";
    const commentInfo = {
      comment,
      time,
      userImage: user?.photoURL,
      userName: user?.displayName,
      postID: data?._id,
    };

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Post added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      });
  };
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
            <button onClick={handleLike}>
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
          <button onClick={() => setClicked(!clicked)}>
            {" "}
            <FaCommentAlt />
          </button>
          {comments?.length}
        </div>
      </div>
      <hr />

      <div className="flex items-center gap-2 w-full pr-2 md:pr-16">
        <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
        <div className="w-full">
          <form onSubmit={handleComment} action="">
            <div className="relative">
              <input
                className="w-full h-8 rounded-full p-3 pr-10 "
                name="comment"
                placeholder="Comment here..."
                type="text"
              />
              <button type="submit" className="absolute right-3 top-2">
                <IoSend />
              </button>
            </div>
          </form>
        </div>
      </div>

      {clicked && (
        <div>
          {comments?.map((data) => (
            <CommentsCart key={data?._id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsCards;
