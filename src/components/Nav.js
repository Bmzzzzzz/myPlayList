import React, { useContext } from "react";
import { NavLink, } from "react-router-dom";
import { userDetailContext } from "../context/userDetailContext";
import'../style/app.css'

export default function Nav({setLog}){

    const [user, setUser]= useContext(userDetailContext)

    const logout = ()=>{
        if(user) {
            localStorage.clear()
            setLog('')
            setUser('')
        }
    }

    return(
        <>
        <nav>
        
        <NavLink style={({ isActive }) =>{return{ color: isActive && "green"}}} className="link" 
            to="/home"> home 
        </NavLink>

        <NavLink style={({ isActive }) =>{return{ color: isActive && "green"}}} className="link" 
            to="/search"> Search 
        </NavLink>

        <NavLink style={({ isActive }) =>{return{ color: isActive && "green"}}} className="link" 
            to="/playlist"> Playlists 
        </NavLink>

        <NavLink onClick={logout} style={({ isActive }) =>{return{ color: isActive && "green"}}} className="link" 
            to="/login"> { user? "Logout" : "Login" } 
        </NavLink>

        <NavLink style={({ isActive }) =>{return{ color: isActive && "green"}}} className="link" 
            to="/signup"> Signup 
        </NavLink>

        </nav>
        </>
    )
}