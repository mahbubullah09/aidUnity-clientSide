import { FaGift, FaHeadset, FaQuestionCircle } from "react-icons/fa";



import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
const Payment = () => {

    const data = useLoaderData()
    console.log(data);
    const totalPrice= data?.price

//   const totalPrice = cart.reduce(
//     (acc, curr) => acc + curr.price * curr.quantity,
//     0
//   );
const {user} = useContext(AuthContext)
//   const axiosSecure = useAxiosSecure();

  const handlePayment = (e) => {
    e.preventDefault();
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    let length = 16;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    const bkashNumber = e.target.bkashNumber.value;
    const payment = {
      email: user?.email,
      Number: bkashNumber,
      price: totalPrice,
      date: new Date(), // convert to utc date. use moment js to
      transactionId: result,
      aid: data?.title,
      aidID: data?._id,
      aidInfo:data

    };
    console.log(payment);

    Swal.fire({
      title: "Are you sure?",
      text: `You total bill is $${totalPrice}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, pay it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://aid-unity-server.vercel.app/payments", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payment),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
      
              if (data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Payment  successfull",
                  showConfirmButton: false,
                  timer: 1500,
                });
                // LRF();
              }
            });
      }
    });
  };

  return (
    <div className="card w-96 mx-auto bg-base-200 shadow-xl mt-16">
      <div className="card-body p-0 text-center">
        <h2 className="text-5xl font-bold font-PtSerif my-4 text-center">
          AidUnity{" "}
        </h2>
        <div className="flex gap-2">
          <p className="flex flex-col items-center">
            <FaHeadset className="text-4xl bg-black text-white p-2 rounded-full" />{" "}
            Support
          </p>
          <p className="flex flex-col items-center">
            <FaQuestionCircle className="text-4xl" /> FAQ
          </p>
          <p className="flex flex-col items-center">
            <FaGift className="text-4xl bg-black text-white p-2 rounded-full" />{" "}
            Offers
          </p>
        </div>
        <div className="flex items-center bg-red-500 mt-2">
          <p className="uppercase text-white text-center text-sm p-2">Cards</p>
          <p className="uppercase text-white text-center bg-violet-500 text-sm p-2">
            Mobile banking
          </p>
          <p className="uppercase text-white text-center text-sm p-2">
            Net banking
          </p>
        </div>
        <form onSubmit={handlePayment} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              disabled
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Bkash Number</span>
            </label>
            <input
              type="number"
              name="bkashNumber"
              placeholder="Bkash Number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            { (
              <button className="btn btn-primary w-full">
                Pay ${data?.price}/-
              </button>
            ) 
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
