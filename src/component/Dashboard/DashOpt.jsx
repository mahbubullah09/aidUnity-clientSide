import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const DashOpt = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="hidden lg:block">
        <div>
          <link
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet"
          />

          <div className=" bg-white text-blue-800 px-10 py-1 z-10 w-full">
            <div className="flex  items-center gap-4  py-2 text-5x1">
              <div>
                <img
                  className="rounded-full w-12"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div className="font-bold text-blue-900 text-xl">
                Dash<span className="text-orange-600">Board</span>
              </div>
            </div>
          </div>

          <div className="w-48 mx-6 mt-2 ">
            <div className=" rounded-xl shadow-lg mb-6 px-6 py-4 bg-orange-200  ">
              <Link to={"/dashboard"}>
                <p className="inline-block text-gray-600 hover:text-black my-4 w-full">
                  <span className="material-icons-outlined float-left pr-2">
                    bar_chart
                  </span>
                  Tasks
                </p>
              </Link>

              <Link to={"/addaids"}>
                <p className="inline-block text-gray-600 hover:text-black my-4 w-full">
                  <span className="material-icons-outlined float-left pr-2">
                    group
                  </span>
                  Manage Aids
                </p>
              </Link>
            
            </div>

            <div className="bg-orange-200 rounded-xl shadow-lg mb-6 px-6 py-4">
              <Link to={"/"}>
                <p className="inline-block text-gray-600 hover:text-black my-4 w-full">
                  <span className="material-icons-outlined float-left pr-2">
                    home
                  </span>
                  Home
                </p>
              </Link>

              <Link to={'/'}>
                <p
                  onClick={logOut}
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    power_settings_new
                  </span>
                  Log out
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:hidden ">
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" text-6xl"><IoIosArrowDroprightCircle /></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-1 w-2/3 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <div>
          <link
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet"
          />

          <div className="  text-blue-800  py-1 z-10  w-2/3 ">
            <div className="flex  items-center gap-4  py-2 text-5x1">
              <div>
                <img
                  className="rounded-full w-12"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div className="font-bold text-blue-900 text-xl">
                Dash<span className="text-orange-600">Board</span>
              </div>
            </div>
          </div>

          <div className="w-48 mx-2 mt-2 ">
            <div className=" rounded-xl shadow-lg mb-6 px-6 py-4 bg-orange-200   ">
            <Link to={"/dashboard"}>
                <p className="inline-block text-gray-600 hover:text-black my-4 w-full">
                  <span className="material-icons-outlined float-left pr-2">
                    bar_chart
                  </span>
                  Tasks
                </p>
              </Link>

              <Link to={"/addtask"}>
                <p className="inline-block text-gray-600 hover:text-black my-4 w-full">
                  <span className="material-icons-outlined float-left pr-2">
                    group
                  </span>
                  Add Task
                </p>
              </Link>
              
            </div>

            <div className="bg-orange-200 rounded-xl shadow-lg mb-6 px-6 py-4">
              <Link to={"/"}>
                <p className="inline-block text-gray-600 hover:text-black my-4 w-full">
                  <span className="material-icons-outlined float-left pr-2">
                    home
                  </span>
                  Home
                </p>
              </Link>

              <Link to={'/'}>
                <p
                  onClick={logOut}
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    power_settings_new
                  </span>
                  Log out
                </p>
              </Link>
            </div>
          </div>
        </div>
      
    </ul>
  </div>
</div>
      </div>
    </div>
  );
};

export default DashOpt;
