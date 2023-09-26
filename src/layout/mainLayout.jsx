import { Link, NavLink, Outlet } from "react-router-dom";




const MainLayout = () => {
  return (
    <div >
      <section >
        <div className="pt-4  ">
        <div className=" flex flex-col gap-10 justify-between items-center text-center mb-4 md:mb-0 md:max-w-2xl md:flex-row lg:max-w-4xl min-[1100px]:max-w-5xl mx-auto">
         <Link to={'/'}> <img className=" cursor-pointer" src="https://i.ibb.co/NNGjs82/Logo.png" alt="" /></Link>
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
