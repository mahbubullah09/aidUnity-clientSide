import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../component/Provider/AuthProvider";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {};
  return (
    <div>
      <div className="pt-4  ">
        <div className=" flex flex-col gap-10 justify-between items-center text-center mb-4 md:mb-0 md:max-w-2xl md:flex-row lg:max-w-4xl min-[1100px]:max-w-5xl mx-auto">
          <Link to={"/"}>
            {" "}
            <img
              className=" cursor-pointer"
              src="https://i.ibb.co/NNGjs82/Logo.png"
              alt=""
            />
          </Link>
          <ul className="flex justify-around gap-4 items-center">
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>

            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
