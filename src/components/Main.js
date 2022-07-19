import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Login from "./Login";
import Search from "./Search";
import Playlist from "./Playlist";
import SingUp from "./SingUp";
import Home from "./Home";
import Footer from "./Footer";
import React from "react";


export default function Main() {
    const [user, setUser] = useContext(UserContext);
    const [x, setx] = useState('')

    useEffect(() => {
        if (user) {
            setx(<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Login />} />
                <Route path="/playlist" element={<Login />} />
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/singUp" element={<SingUp />} />
            </Routes>)
        }
        else {
            setx(<Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>)
        }
    }, [user])

    return (
        <>
            <main>

                {x}
                {/* <Footer /> */}
            </main>
        </>
    );
}
