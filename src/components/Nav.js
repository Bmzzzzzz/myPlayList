import { NavLink, } from "react-router-dom";
import React from "react";
import'../style/app.css'

export default function Nav(){

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
            to="/playlist"> Playlist 
        </NavLink>

        <NavLink style={({ isActive }) =>{return{ color: isActive && "green"}}} className="link" 
            to="/login"> Login 
        </NavLink>

        <NavLink style={({ isActive }) =>{return{ color: isActive && "green"}}} className="link" 
            to="/signup"> SignUp 
        </NavLink>

        </nav>
        </>
    )
}