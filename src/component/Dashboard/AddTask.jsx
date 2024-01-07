// import { Helmet } from "react-helmet-async";
// import TagsInput from "./TagsInput/TagsInput";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

import { AuthContext } from "../Provider/authProvider";

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
    const { taskTitle, priority, date, description } = data;
    const taskInfo = {
      title: taskTitle,
      priority: priority,
      date,
      Email,

      description: description,
    };
    console.log(taskInfo);
    reset();

    // const taskInfo ={
    //     title,
    //     date,
    //     priority,
    //     Email,
    //     description
    // }
    // console.log(taskInfo);

    fetch(`https://task-canvas-server.vercel.app/tasks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Task added successfully",
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
                  Task Title <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Task Title"
                {...register("taskTitle", {
                  required: true,
                })}
                className="h-10 border p-2 w-full "
              />
              {errors.externalLink && (
                <span className="text-red-600">Task Title is required</span>
              )}
            </div>

      <div className="flex gap-4 justify-center">
      <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">
                  Priority <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Priority"
                {...register("priority", {
                  required: true,
                })}
                className="h-10 border p-2 w-full "
              />
              {errors.externalLink && (
                <span className="text-red-600">Priority is required</span>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">
                  Deadline <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <input
                type="date"
                placeholder="Deadline"
                {...register("date", {
                  required: true,
                })}
                className="h-10 border p-2 w-full "
              />
              {errors.externalLink && (
                <span className="text-red-600">Deadline is required</span>
              )}
            </div>
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
