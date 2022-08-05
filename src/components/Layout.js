import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";
import Main from "./Main";
import Home from "./Home";
import Search from "./Search";
import Playlist from "./Playlist";
import { UserLoginContext } from "../context/UserLoginContext";
import { userDetailContext } from "../context/userDetailContext";
import '../style/app.css'
import '../style/loding.css'


function Layout() {
  
  const [isLoged, setIsLoged] = useState(localStorage.userToken)
  const [user, setUser] = useState()

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
      setUser(localStorage.clear());
      setIsLoged('');
    }

  },[isLoged])
 
  return (
    <>
        <UserLoginContext.Provider value={[isLoged, setIsLoged]}>
          <userDetailContext.Provider value={user}>
          <Header user={user} />
    
           <Routes>
              <Route path="/" element={<Main />}>
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/playlist" element={<Playlist user={user} />} />
              </Route>

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<h1>Not Found</h1>} />

            </Routes>
          </userDetailContext.Provider>
        </UserLoginContext.Provider>
    </>
  );
  
}

export default Layout;

// {/* <div className="spin">
//   <div className="eq-spinner"><i /></div>
// </div> */}