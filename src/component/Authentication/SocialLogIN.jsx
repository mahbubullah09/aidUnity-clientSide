import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";





const SocialLogIn = () => {
  
 const location = useLocation();
   
   const navigate = useNavigate()
   

    const {user, googleLogin} = useContext(AuthContext)
    console.log(user);

    const handleSocialSingin = () =>{
        googleLogin()
        .then(result =>  {


           
            
                console.log(result.data);
              
                  navigate(location.state ? location.state : "/");
                  toast.success("Successfully login");
                
              })
            



          
           
            
            .catch((error) => {
        Swal("Oops!", error.message, "error");
      });
    }



 
    return (
        <div>
             <div className="divider px-4">continue with</div>
            <div className=" text-center my-6">
                <button onClick={handleSocialSingin} className=" text-5xl"> <FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogIn;