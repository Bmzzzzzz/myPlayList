import { Route, Routes, Link } from "react-router-dom";
import Nav from "./Nav";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function Header(){
    const [user,setUser]= useContext(UserContext)
    return(
        <>
        <header>
            <span>{user.username}</span>
<Nav />
            header
        </header>
        </>
    )
}