import React, { useContext } from "react";
import Nav from "./Nav";
import '../style/loding.css'
import'../style/app.css'
import { userDetailContext } from "../context/userDetailContext";


export default function Header({setLog}) {

    const [user, setUser]= useContext(userDetailContext)

    const Logout = ()=>{
        localStorage.clear()
        setLog('')
        setUser('')
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