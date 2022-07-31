import React,{useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserLoginContext } from "../context/UserLoginContext";


export default function Main() {
  
    // eslint-disable-next-line
    const [isLoged, setIsLoged] = useContext(UserLoginContext)

    return (
        <>
          <main>

            {isLoged?
             <Outlet />:
             <Navigate to="/login" replace={true} />}

          </main>
        </>
    );
}
