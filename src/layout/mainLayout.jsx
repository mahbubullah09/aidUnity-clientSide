import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../component/Provider/AuthProvider";
import Nav from "./Navbar";





const MainLayout = () => {


  return (
    <div >
      <section >
        <Nav/>
    
        <div className=" max-w-5xl mx-auto">
            
        <Outlet></Outlet>
        <Toaster/>
        </div>
      </section>
    </div>
  );
};

export default MainLayout;
