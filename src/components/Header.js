import Nav from "./Nav";
import { UserLoginContext } from "../context/UserLoginContext";
import { useContext } from "react";
import '../style/loding.css'
import'../style/app.css'
import React from "react";


export default function Header({user}) {

    // eslint-disable-next-line
    const [isLoged, setIsLoged] = useContext(UserLoginContext)

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