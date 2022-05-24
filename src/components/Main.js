import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Playlist from "./Playlist";

export default function Main(){
    return(
        <>
        <main>
            main
            <Routes>
                <Route path="/" />
                <Route path="/Login" element={<Login />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Playlist" element={<Playlist />} />
            </Routes>
        </main>
        </>
    )
}