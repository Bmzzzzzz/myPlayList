import React,{ useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";


export default function Main({setUser, log}) {
  
  
    const [isLoged, setIsLoged] = log

    useEffect(() => {

      let tenHoursAgo = new Date().setHours(new Date().getHours() - 9)
  
      if(isLoged && ( localStorage.loginDate > tenHoursAgo || (!localStorage.loginDate)) ){
        
        fetch('http://localhost:3002/api/users/', {
            method: "GET",
            headers: { Authorization: `bearer ${isLoged}` }
        })
        .then(res=>res.json())
        .then(res=>{
          setUser(res);
          localStorage.loginDate = new Date().getTime()
        })
      }
      else {
        localStorage.clear()
        setIsLoged('');
        setUser('');
      }
  
    },[isLoged])


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
