import { Routes, Route, Link } from "react-router-dom";
export default function Nav(){
    return(
        <>
        <nav>nav
        <Link className="link" to="/"> home </Link>
        <Link className="link" to="/Login"> Login </Link>
        <Link className="link" to="/Search"> Search </Link>
        <Link className="link" to="/Playlist"> Playlist </Link>

        </nav>
        </>
    )
}