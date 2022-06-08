import { Link } from "react-router-dom";

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
        <Link className="link" to="/search"> Search </Link>
        <Link className="link" to="/playlist"> Playlist </Link>
        <Link className="link" to="/login"> Login </Link>
        <Link className="link" to="/singup"> Sing Up </Link>


        </nav>
        </>
    )
}