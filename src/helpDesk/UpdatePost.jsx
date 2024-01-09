import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { AuthContext } from '../component/Provider/AuthProvider';

const UpdatePost = ({data, setUpdate, RF}) => {

    const {user} = useContext(AuthContext)

    const id = data?._id
console.log(id);
    const handlePost = (e) =>{
        e.preventDefault();
        const title = e.target.title.value;
        const image = e.target.image.value;
        const details = e.target.details.value;
       
    
        const updateInfo = {
            title,
            image,
            details,
            userImage : user?.photoURL,
            userName : user?.displayName,
            time: data?.time,
            like: data?.like,
            dislike: data?.dislike,
            userEmail : user?.email
    
    
        }
        console.log(updateInfo);
    
        fetch(`https://aid-unity-server.vercel.app/posts/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              RF();
            });
      
    
     
        setUpdate(false)
      }
    return (
        <div>
              <div className="p-8  bg-slate-100 rounded-2xl relative">
            <div className="mb-8">
                <p onClick={()=>(setUpdate(false)  )}> <span className=" cursor-pointer   absolute left-2 top-2 flex items-center gap-1 bg-slate-200 px-4 py-1 rounded-full">
                  <FaArrowLeft /> Back
                </span></p>
            </div>
        <form onSubmit={handlePost} action="">
        <div>
              <p>Title</p>
              <input
              name="title"
              defaultValue={data?.title}
                placeholder="Title here"
                className="border rounded-2xl  px-4 h-14 w-full "
                type="text"
              />
            </div>
            <div>
              <p>Image</p>
              <input
              name="image"
              defaultValue={data?.image}
                placeholder="Image URL"
                className="border rounded-2xl  px-4 h-14 w-full "
                type="text"
              />
            </div>
            <div>
              <p>Details</p>
              <textarea
              name="details"
              defaultValue={data?.details}
                placeholder="Details here..."
                className="border rounded-2xl  p-4 h-24 w-full  "
                type="text"
              />
            </div>

            <div className="mb-8">
              <button type="submit"   className=" absolute right-4 bottom-2 py-2 px-4 text-white bg-green-700">
                Update
              </button>
            </div>
        </form>
        </div>
        </div>
    );
};

export default UpdatePost;