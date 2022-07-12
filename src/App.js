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
  const setUser = useState(false)
 

  return (
    <>
      {/* <div className="spin">
        <div className="eq-spinner"><i /></div>
      </div> */}
  
     
        <UserContext.Provider value={setUser}>
          <Header />
          <Main />
        </UserContext.Provider>
         
      
    </>
  );
}

export default App;
