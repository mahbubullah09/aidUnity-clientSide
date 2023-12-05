import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import img from "../../assets/login.svg"
import SocialLogIN from "./SocialLogIN";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";





const LogIn = () => {
 const  {singin} = useContext(AuthContext);

 const location = useLocation();


 const navigate = useNavigate();

    const handleData = event =>{
        event.preventDefault();
      
        const email = event.target.email.value;
        const password= event.target.password.value;

        singin(email,password)
        .then(result =>{
          const user = result.user
          console.log(user)

       

        
          
         
              navigate(location.state ? location.state : '/')
  
          
        
               
        
        })
        .catch(error => console.log(error))

        console.log(email,password);
        

    }
  return (
    <div>
      <section className="h-screen max-w-5xl mx-auto">
        <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src={img}
                className="w-full"
                alt="Sample image"
              />
            </div>

            <div className="rounded  mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 border border-1 p-10">

                <h2 className=" font-bold text-4xl text-[#444444] text-center mb-8 ">Log In</h2>
              <form onSubmit={handleData}>
               

             

                 <p className="mb-3">Email</p>

                <div className="relative mb-6" data-te-input-wrapper-init>
                   
                  <input
                    type="text"
                    className="border block h-12 w-full rounded border-1 bg-transparent px-3 py-[0.32rem] "
                    name="email"
                    placeholder="Email address"
                  />
                  
                </div>


                <p className="mb-3">Password</p>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="border block h-12 w-full rounded border-1 bg-transparent px-3 py-[0.32rem] "
                    id="password"
                    placeholder="Password"
                  />
                 
                </div>

                <button type="submit" className="bg-[#FF3811] w-full rounded py-2 text-white font-bold">Sing Up</button>

              

                
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">

<SocialLogIN/>
</div>

<p className="mb-0 mt-2 pt-1 text-sm font-semibold text-center">
      Don't have an account?
      <Link to={'/singup'}
     
        className="text-danger text-[#FF3811]  font-bold transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
      >
       Sing Up
      </Link>
    </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;