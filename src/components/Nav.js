import { Routes, Route, Link } from "react-router-dom";

import'../style/app.css'
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function Nav(){
    const [user, setUser] = useContext(UserContext)
    return(
        <>
        
        <nav>
        
        <span>Profile:{user.username}</span>
        <Link className="link" to="/"> home </Link>
        <Link className="link" to="/Login"> Login </Link>
        <Link className="link" to="/Search"> Search </Link>
        <Link className="link" to="/Playlist"> Playlist </Link>

        </nav>
        </>
    )
}