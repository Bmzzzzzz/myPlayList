import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Playlist from "./Playlist";
import { useContext, useState, useEffect} from "react";
import { UserContext } from "../context/UserContext";

export default function Main() {
    const [user,setUser ]= useContext(UserContext);
    const [x, setx] = useState('')

    useEffect (()=>{
        if (user==false){
        setx(  <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Search" element={<Login />} />
            <Route path="/Playlist" element={<Login />} />
        </Routes>)
        }
        else {setx( <Routes>
            <Route path="/" />
             <Route path="/Login" element={<Login />} />
            <Route path="/Search" element={<Search />} />
           <Route path="/Playlist" element={<Playlist />} />
       </Routes>)}
    },[user])

    return (
        <>
            <main>
                main
               {x}
            </main>
        </>
    );
}
