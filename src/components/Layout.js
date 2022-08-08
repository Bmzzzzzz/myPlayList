import React, { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Main from "./Main";
import Search from "../pages/Search";
import Playlist from "../pages/Playlist";
import Songs from "../pages/Songs";
import Player from "../pages/Player";
import Popup from './Popup'
import { userDetailContext } from "../context/userDetailContext";
import { popupContext } from "../context/popupContext";
import '../style/app.css'
import '../style/loding.css'


function Layout() {
  
  const [isLoged, setIsLoged] = useState(localStorage.userToken)
  const [user, setUser] = useState()
  const [popup, setPopup] = useState()

  
 
  return (
    <>
    <BrowserRouter>
        <userDetailContext.Provider value={[user, setUser]}>
        <popupContext.Provider value={setPopup} >

          <Header setLog={setIsLoged} />
          {popup && <Popup content={popup} close={setPopup} />}

           <Routes>

              <Route path="/" element={<Navigate to="/home" replace={true} />} />
              <Route path="/" element={<Main setUser={setUser} log={[isLoged, setIsLoged]} />}>
                <Route path="/home" element={<Songs />} >
                  <Route path=":songName" element={<Player />} />
                </Route>

                <Route path="/search" element={<Search />} >
                  <Route path=":songName" element={<Player />} />
                </Route>

                <Route path="/playlist" element={<Playlist user={user} />} />
                <Route path="playlist/:title" element={<Songs />} >
                  <Route path="all-songs" element={<Player />} />
                  <Route path=":songName" element={<Player />} />
                </Route>
              </Route>

              <Route path="/signup" element={<SignUp setLog={setIsLoged} />} />
              <Route path="/login" element={<Login setLog={setIsLoged} />} />
              <Route path="*" element={<h1>Not Found</h1>} />
              
           </Routes>

        </popupContext.Provider>
        </userDetailContext.Provider>
    </BrowserRouter>
    </>
  );
  
}

export default Layout;

// {/* <div className="spin">
//   <div className="eq-spinner"><i /></div>
// </div> */}