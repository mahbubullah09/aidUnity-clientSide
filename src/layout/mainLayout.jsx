import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <section >
        <div className="pt-4  ">
        <div className=" flex justify-between items-center max-w-5xl mx-auto">
          <img src="https://i.ibb.co/NNGjs82/Logo.png" alt="" />
         <ul className="flex justify-around gap-4 items-center">
            <li>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-[#FF444A] underline text-lg font-medium " : ""
            }
          >
            Home
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/Donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-[#FF444A] underline font-medium" : ""
            }
          >
            Donation
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/Statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-[#FF444A] underline font-medium" : ""
            }
          >
           Statistics
          </NavLink>
            </li>
         </ul>
          
        
        </div>
        </div>
        <div className=" max-w-5xl mx-auto">
            
        <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default MainLayout;
