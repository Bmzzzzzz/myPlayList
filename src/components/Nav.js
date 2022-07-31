import { Link } from "react-router-dom";
import React from "react";
import'../style/app.css'

export default function Nav(){

    return(
        <>
        
        <nav>
        
        {/* <span>Profile:{user.username}</span> */}
        <Link className="link" to="/"> home </Link>
        <Link className="link" to="/search"> Search </Link>
        <Link className="link" to="/playlist"> Playlist </Link>
        <Link className="link" to="/login"> Login </Link>
        <Link className="link" to="/singup"> Sing Up </Link>


        </nav>
        </>
    )
}