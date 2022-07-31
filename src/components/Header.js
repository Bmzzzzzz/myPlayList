import { Route, Routes, Link } from "react-router-dom";
import Nav from "./Nav";
import { UserLoginContext } from "../context/UserLoginContext";
import { useContext, useEffect, useState } from "react";
import '../style/loding.css'
import'../style/app.css'
import React from "react";


export default function Header({user}) {
    const [isLoged, setIsLoged] = useContext(UserLoginContext)
    const [userName, setUserName] = useState()

    const Logout = ()=>{
        localStorage.clear()
        setIsLoged('')
    }
   
    return (
        <>
            <header>
                <Nav />
                <div className="user-name"> { user && user.firstName } </div>
                {user && 
                <button onClick={Logout} >Logout</button>}
            </header>
        </>
    )
}