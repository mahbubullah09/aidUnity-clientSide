import React, { useContext, useEffect, useState } from "react";
import { TbClockBolt } from "react-icons/tb";
import TimeAgo from "timeago-react";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { AuthContext } from "../component/Provider/AuthProvider";
import { IoSend } from "react-icons/io5";
import moment from "moment";
import Swal from "sweetalert2";
import useAxiosPublic from "../component/Hooks/usePublic";
import { useQuery } from "@tanstack/react-query";
import CommentsCart from "./CommentsCart";
import { BsThreeDots } from "react-icons/bs";
import UpdatePost from "./UpdatePost";

const PostsCards = ({ data, RF }) => {
  const [clicked, setClicked] = useState(false);
  const { user } = useContext(AuthContext);
  const id = data?._id;
  const UserEmail = user?.email;
  console.log(id);
  const [update, setUpdate] = useState(false);

  const axiosPublic = useAxiosPublic();

  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments/posts?postID=${id}`);
      return res.data;
    },
  });
  const { data: like = [], refetch: LRF } = useQuery({
    queryKey: ["likes", UserEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(`/likes/email?userEmail=${UserEmail}`);
      return res.data;
    },
  });

  //filter

  const [IsLiked, setIsLiked] = useState();
  useEffect(() => {
    const findLiked = like?.find((data) => data?.postID === id);
    setIsLiked(findLiked);
  }, [id, like]);
  console.log(IsLiked);

  const { data: dislike = [], refetch: DRF } = useQuery({
    queryKey: ["dislikes", UserEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/dislikes/email?userEmail=${UserEmail}`
      );
      return res.data;
    },
  });

  //filter

  const [IsDisLiked, setIsDisLiked] = useState();
  useEffect(() => {
    const findLiked = dislike?.find((data) => data?.postID === id);
    setIsDisLiked(findLiked);
  }, [id, dislike]);
  console.log(IsDisLiked);

  const time = moment().format("YYYY-MM-DD h:mm:ss a");
  const newLike = data?.like + 1;
  const newDisike = data?.dislike + 1;
  console.log(newLike);
  const handleLike = () => {
    const UpdateInfo = {
      title: data?.title,

      image: data?.image,

      details: data?.details,

      userImage: data?.userImage,
      userEmail: data?.userEmail,

      userName: data?.userName,

      time: data?.time,

      like: newLike,

      dislike: data?.dislike,
    };

    fetch(`https://aid-unity-server.vercel.app/posts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        RF();
      });

    const postInfo = {
      userEmail: user?.email,
      postID: id,
    };
    console.log(postInfo);

    fetch("https://aid-unity-server.vercel.app/likes", {
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
          LRF();
        }
      });
  };
  const handleDislike = () => {
    const UpdateInfo = {
      title: data?.title,

      image: data?.image,

      details: data?.details,

      userImage: data?.userImage,

      userName: data?.userName,
      userEmail: data?.userEmail,

      time: data?.time,

      like: data?.like,

      dislike: newDisike,
    };

    fetch(`https://aid-unity-server.vercel.app/posts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        RF();
      });

    const postInfo = {
      userEmail: user?.email,
      postID: id,
    };
    console.log(postInfo);

    fetch("https://aid-unity-server.vercel.app/dislikes", {
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
          DRF();
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

    fetch("https://aid-unity-server.vercel.app/comments", {
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

  const handleDelete = () =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://aid-unity-server.vercel.app/posts/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
  
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Coupons has been deleted.", "success");
              RF()
              }
            });
        }
      });
  }
  return (
   <div>
   {
    update === false &&
    <div className="bg-slate-200 p-6 rounded-2xl my-4 space-y-4">
    <div className="flex justify-between items-center">
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
      <div>
       {
        data?.userEmail === user?.email &&
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" m-1">
          <BsThreeDots />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <p onClick={handleDelete}>Delete</p>
          </li>
          <li>
            <p onClick={() => setUpdate(true)}>Update</p>
          </li>
        </ul>
      </div>
       }
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
          {!IsLiked ? (
            <button onClick={handleLike}>
              {" "}
              <AiOutlineLike />
            </button>
          ) : (
            <button className="disabled">
              {" "}
              <AiFillLike />
            </button>
          )}
          {data?.like}
        </div>
        <div className=" flex items-center gap-2">
          {!IsDisLiked ? (
            <button onClick={handleDislike}>
              <AiOutlineDislike />
            </button>
          ) : (
            <button className="disabled">
              {" "}
              <AiFillDislike />
            </button>
          )}
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
   }

    <div>
       {
        update === true &&
        <UpdatePost data={data} setUpdate={setUpdate} RF={RF}/>
       }
    </div>
   </div>

  );
};

export default PostsCards;
