import { useContext, useState, useEffect } from "react"
//import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import './style/app.css'
import { UserContext } from "./context/UserContext";
import { apiContext } from "./context/apiContext";
import './style/loding.css'
import React from "react";


function App() {
  const userState = useState(false)
  useEffect(() => {
    // check if token in local storage then get user by token
  },[])

  return (
    <>
      {/* <div className="spin">
        <div className="eq-spinner"><i /></div>
      </div> */}
  
     
        <UserContext.Provider value={userState}>
          <Header />
          <Main />
        </UserContext.Provider>
         
      
    </>
  );
}

export default App;
