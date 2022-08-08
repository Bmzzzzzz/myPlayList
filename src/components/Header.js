import React, { useContext } from "react";
import Nav from "./Nav";
import '../style/loding.css'
import'../style/app.css'
import { userDetailContext } from "../context/userDetailContext";
import { SiPlayerfm } from 'react-icons/si'


export default function Header({setLog}) {

    // eslint-disable-next-line
    const [user, setUser]= useContext(userDetailContext)
   
    return (
        <>
            <header>
                <SiPlayerfm />
                <div>BZMAG Player</div>
                <Nav setlog={setLog} />
                <div className="user-name"> { user && user.firstName } </div>
            </header>
        </>
    )
}