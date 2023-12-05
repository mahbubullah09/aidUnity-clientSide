import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    // console.log(location.pathname);

    const {user,loader} = useContext(AuthContext);
    console.log(user);

    if(loader){
        return <span className="loading loading-bars loading-lg"></span>
    }


    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace ></Navigate>
   
};

export default PrivateRoute;