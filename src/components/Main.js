import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Playlist from "./Playlist";
import SingUp from "./SingUp";
import Home from "./Home";
import Footer from "./Footer";
import React from "react";


export default function Main() {
  
    return (
        <>
          <main>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/search" element={<Search />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/home" element={<Home />} />
                <Route path="/singup" element={<SingUp />} />
            </Routes>
                {/* <Footer /> */}
          </main>
        </>
    );
}
