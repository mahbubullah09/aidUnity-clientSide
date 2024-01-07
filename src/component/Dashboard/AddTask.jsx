// import { Helmet } from "react-helmet-async";
// import TagsInput from "./TagsInput/TagsInput";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";



const AddTask = () => {
  const { user } = useContext(AuthContext);
  const Email = user?.email


  // const handleCoupon = (e) =>{
  //   e.preventDefault();
  //   const title = e.target.title.value;
  //   const date = e.target.date.value;
  //   const priority = e.target.priority.value;
  //   const description = e.target.description.value;


const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { title, category,picture, price, description } = data;
    const aidsInfo = {
     title,
     picture,
     price,
      category, 
      description: description,
    };
    console.log(aidsInfo);
    reset();

 

    fetch(`http://localhost:5000/aids`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(aidsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Aids added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      {/* <Helmet>
        <title>Dashboard | AddProduct</title>
      </Helmet> */}
      <h3 className="text-4xl font-playfair font-bold text-center mt-8">
        Add New Task
      </h3>

      <div className="w-full">
        <div className="bg-white mx-10 px-5 py-4 rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">
                 Title <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Title"
                {...register("title", {
                  required: true,
                })}
                className="h-10 border p-2 w-full "
              />
              {errors.externalLink && (
                <span className="text-red-600">Task Title is required</span>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">
                  Image <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Image"
                {...register("picture", {
                  required: true,
                })}
                className="h-10 border p-2 w-full "
              />
              {errors.externalLink && (
                <span className="text-red-600">image Link is required</span>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">
                  Amount<span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <input
                type="number"
                placeholder="Amount"
                {...register("price", {
                  required: true,
                })}
                className="h-10 border p-2 w-full "
              />
              {errors.externalLink && (
                <span className="text-red-600">Cmount is required</span>
              )}
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">
                  Category <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <select {...register("category")}>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
      </select>
              {errors.externalLink && (
                <span className="text-red-600">Category is required</span>
              )}
            </div>

 

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Description <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <textarea
                {...register("description", {
                  required: true,
                  minLength: 20,
                  maxLength: 500,
                })}
                className="textarea textarea-bordered h-24"
                placeholder=" Description"
              ></textarea>
              {errors.description?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.description?.type === "minLength" && (
                <p className="text-red-600">
                  Description must be 20 characters
                </p>
              )}
              {errors.description?.type === "maxLength" && (
                <p className="text-red-600">
                  Description must be less than 500 characters
                </p>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button className=" rounded-lg px-4 py-2 bg-[#0D6EFD] text-white text-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
