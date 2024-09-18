import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../component/Provider/AuthProvider";


const Nav = () => {
  const { user, logout } = useContext(AuthContext);



  
  const navLink = (
    <div className=" gap-2 flex flex-col lg:flex-row ">
      <ul className="py-1 relative group">
      <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-[#FF444A] underline text-lg font-medium "
                    : ""
                }
              >
                Home
              </NavLink>
      </ul>
      <ul className="py-1 relative group">
      <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-[#FF444A] underline text-lg font-medium "
                    : ""
                }
              >
                Contact Us
              </NavLink>
      </ul>
      <ul className="py-1 relative group">
      <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-[#FF444A] underline font-medium"
                    : ""
                }
              >
                Donation
              </NavLink>
      </ul>
      {/* <ul className="py-1 relative group">
      <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-[#FF444A] underline font-medium"
                    : ""
                }
              >
                Statistics
              </NavLink>
      </ul> */}

      <ul className="py-1 relative group">
      <NavLink
                to="/events"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-[#FF444A] underline font-medium"
                    : ""
                }
              >
                Events
              </NavLink>
      </ul>

      <ul className="py-1 relative group">
      <NavLink
                to="/helpdesk"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-[#FF444A] underline font-medium"
                    : ""
                }
              >
                HeelpDesk
              </NavLink>
      </ul>
{
  user?.email ==='admin@aidunity.com' &&
  <ul className="py-1 relative group">
  <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-[#FF444A] underline font-medium"
                : ""
            }
          >
            Dashboard
          </NavLink>
  </ul>
}
      {/* <li>
              {user ? (
                <button
                  onClick={logout}
                  className="bg-gray-600 py-2 px-4 text-white rounded-md"
                >
                  Logout
                </button>
              ) : (
                <Link to={"login"}>
                  <button className="bg-gray-600 py-2 px-4 text-white rounded-md">
                    Login
                  </button>
                </Link>
              )}
            </li> */}

     
    </div>
  );


  
  return (
    <div>
    <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLink}
          </ul>
        </div>
       <Link to={'/'}>
       <h2 className="bg-[#272770]  text-white rounded-full px-4 py-1 text-center ">
                {" "}
                Aid
                <span className="text-[#ffd900] font-bold text-xl">Unity</span>
              </h2>
       </Link>
      </div>
      <div className="navbar-center hidden lg:flex    ">
        <ul className="menu menu-horizontal px-4 "></ul>
      </div>
      <div className="navbar-end">
      <p className="hidden lg:block mr-2">{navLink}</p>
        
        {user?.email ? (
          <div className="cursor-pointer mr-2 flex items-center gap-2">
            {/* <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="">
                <div className="w-10  ">
                  {user ? (
                    <img
                      className="  cursor-pointer rounded-full w-16"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <div className=" text-4xl">
                      {" "}
                   
                    </div>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                

                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
              </ul>
            </div> */}
            <div>
              <button
                className="  text-sm md:text-base font-semibold hover:bg-bg-[#272770]  bg-[#FF444A] text-white py-1 px-2 md:py-2 md:px-4 rounded-md hover:bg-blue-gray-800"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className=" text-sm md:text-base font-semibold   bg-[#FF444A] text-white py-1 px-2 md:py-2 md:px-4 rounded-md hover:bg-blue-gray-800 ">
            <Link to={"/login"}>Log In</Link>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default Nav;
