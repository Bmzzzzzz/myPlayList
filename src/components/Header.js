import { Route, Routes, Link } from "react-router-dom";
import Nav from "./Nav";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import '../style/loding.css'
import'../style/app.css'

export default function Header() {
    const [user, setUser] = useContext(UserContext)
    return (
        <>
            <header>
              
                
                

                
                <Nav />
        
            </header>
        </>
    )
}