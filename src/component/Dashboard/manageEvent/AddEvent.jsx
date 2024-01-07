import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import ManageEvent from "./ManageEvent";

const AddEvent = () => {
  const { user } = useContext(AuthContext);
  const Email = user?.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { title, date, description } = data;
    const eventInfo = {
      title,
     
      date,
      description: description,
    };
    console.log(eventInfo);
    reset();

    fetch(`http://localhost:5000/events`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Event added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const [click, setClick] = useState(false);
  return (
    <div className="w-full">
      {/* <Helmet>
        <title>Dashboard | AddProduct</title>
      </Helmet> */}

      <div className="flex justify-between items-center  mt-6">
        <h2 className="text-4xl font-bold">Add New Task</h2>
        <div>
          <button
            onClick={() => {
              setClick(!click);
            }}
            className="py-2 px-4 bg-teal-600 text-white font-bold"
          >
            {!click ? (
              <span className="flex items-center gap-2 text-lg">
                Add AIDS <IoIosArrowDropdownCircle />
              </span>
            ) : (
              <span className="flex items-center gap-2 text-lg">
                Collaps <IoIosArrowDropupCircle />
              </span>
            )}
          </button>
        </div>
      </div>
      <hr className="mt-6" />
      <div>
        {click ? (
          <div>
            <h3 className="text-4xl font-playfair font-bold text-center mt-8">
              Add New Event
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
                      <span className="text-red-600">
                        Task Title is required
                      </span>
                    )}
                  </div>
                
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">
                        Date<span className="text-red-600 text-lg">*</span>
                      </span>
                    </label>
                    <input
                      type="date"
                      placeholder="date"
                      {...register("date", {
                        required: true,
                      })}
                      className="h-10 border p-2 w-full "
                    />
                    {errors.externalLink && (
                      <span className="text-red-600">Date is required</span>
                    )}
                  </div>


                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Description{" "}
                        <span className="text-red-600 text-lg">*</span>
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
        ) : (
          ""
        )}
      </div>
      <ManageEvent />
    </div>
  );
};

export default AddEvent;
