import React, { useContext, useState } from "react";
import { AuthContext } from "../component/Provider/AuthProvider";
import { FaArrowLeft } from "react-icons/fa6";
import moment from "moment";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../component/Hooks/usePublic";
import PostsCards from "./PostsCards";

const HelpDesk = () => {
  const { user } = useContext(AuthContext);
  const [clicked, setClicked] = useState(false)
  const time = moment().format("YYYY-MM-DD h:mm:ss a");
  const like =0
  const dislike = 0

  const axiosPublic = useAxiosPublic();
  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/posts`);
      return res.data;
    },
   
  });

  console.log(posts);

  const handlePost = (e) =>{
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const details = e.target.details.value;
   

    const postInfo = {
        title,
        image,
        details,
        userImage : user?.photoURL,
        userName : user?.displayName,
        time,
        like,
        dislike

    }
    console.log(postInfo);

    fetch("http://localhost:5000/posts", {
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
              title: "Post added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch()
          }
        });

    console.log("post");
    setClicked(false)
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
     {
        !clicked && 
      
        <div className="flex items-center gap-6 p-8  bg-slate-200 rounded-2xl">
          <img className="rounded-full w-14" src={user?.photoURL} alt="" />
          <input
          onClick={()=> setClicked(true)}
          
            
            className="border rounded-full  px-4 h-14 w-full  "
            placeholder="Whats on your mind?"
            type="text"
          />
        </div>
       
     }

       {
        clicked && 
        <div className="p-8  bg-slate-100 rounded-2xl relative">
            <div className="mb-8">
                <p onClick={()=>(setClicked(false)  )}> <span className=" cursor-pointer   absolute left-2 top-2 flex items-center gap-1 bg-slate-200 px-4 py-1 rounded-full">
                  <FaArrowLeft /> Back
                </span></p>
            </div>
        <form onSubmit={handlePost} action="">
        <div>
              <p>Title</p>
              <input
              name="title"
                placeholder="Title here"
                className="border rounded-2xl  px-4 h-14 w-full "
                type="text"
              />
            </div>
            <div>
              <p>Image</p>
              <input
              name="image"
                placeholder="Image URL"
                className="border rounded-2xl  px-4 h-14 w-full "
                type="text"
              />
            </div>
            <div>
              <p>Details</p>
              <textarea
              name="details"
                placeholder="Details here..."
                className="border rounded-2xl  p-4 h-24 w-full  "
                type="text"
              />
            </div>

            <div className="mb-8">
              <button type="submit"   className=" absolute right-4 bottom-2 py-2 px-4 text-white bg-green-700">
                Post
              </button>
            </div>
        </form>
        </div>
       }

       <div >
        {
            posts.map((data) => <PostsCards key={data?._id} data={data}/>)
        }
       </div>

       
      </div>
   
  );
};

export default HelpDesk;
