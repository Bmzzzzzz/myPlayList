import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Playlist from "./Playlist";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import SingUp from "./SingUp";
import Home from "./Home";

export default function Main() {
    const [user, setUser] = useContext(UserContext);
    const [x, setx] = useState('')

    useEffect(() => {
        if (user == false) {
            setx(<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Login />} />
                <Route path="/playlist" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/singUp" element={<SingUp />} />
            </Routes>)
        }
        else {
            setx(<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<Search />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/home" element={<Home />} />
                <Route path="/singup" element={<SingUp />} />
            </Routes>)
        }
    }, [user])

    return (
        <>
            <main>

                {x}
            </main>
        </>
    );
}
