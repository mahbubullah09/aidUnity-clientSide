import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext =createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user,SetUser] = useState([]);
    const [loader, setLoader] = useState(true)

    const createUsers = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singin = (email,password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            SetUser(currentUser);
            setLoader(false)
            console.log(currentUser);
        });
        return () =>{
          return   unsubscribe();
        }
    
    },[])

    const logout = () =>{
        setLoader(true)
        return signOut(auth);
    }

 


    const AuthInfo ={
        user,
        loader,
        createUsers,
        singin,
        logout

    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;