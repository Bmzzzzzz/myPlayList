import { useState, useEffect } from "react"
//import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Main from "./Main";
import '../style/app.css'
import { UserLoginContext } from "../context/UserLoginContext";
import { userDetailContext } from "../context/userDetailContext";
import '../style/loding.css'
import React from "react";


function Layout() {
  const [isLoged, setIsLoged] = useState(localStorage.userToken)
  const [user, setUser] = useState()

  useEffect(() => {
    isLoged?
    fetch('http://localhost:3002/api/users/', {
        method: "GET",
        headers: { Authorization: `bearer ${isLoged}` }
    })
    .then(res=>res.json())
    .then(res=>setUser(res))
    : setUser(localStorage.clear())
},[isLoged])
 
  return (
    <>
        <UserLoginContext.Provider value={[isLoged, setIsLoged]}>
          <userDetailContext.Provider value={user}>
          <Header user={user} />
          {isLoged?
          <Main />:
          <Login />
          }
          </userDetailContext.Provider>
        </UserLoginContext.Provider>
    </>
  );
}

export default Layout;

{/* <div className="spin">
  <div className="eq-spinner"><i /></div>
</div> */}