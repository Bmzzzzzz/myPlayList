import { apiContext } from "../context/apiContext";
import { useContext, useState, useEffect } from "react";

export default function Search() {
    const x = useContext(apiContext);
    console.log(x);
    const [inputSearch, setInputSearch] = useState("a");
    const [filteredsong, setFilteredSong] = useState("a");
    const [filteredArtist, setFilteredArtist] = useState("a");




    useEffect(() => {
        let a = x.filter((v) => {
            return v.name.common.toLowerCase().startsWith(inputSearch.toLowerCase());
        })
        let b = x.filter((v) => {
            return (v.name.common.toLowerCase().startsWith(inputSearch.toLowerCase()));
        })
        setFilteredArtist(a);
        setFilteredSong(b);
        console.log(a);
    }, [inputSearch]);
    return (
        <>
            <input
                type="search"
                placeholder="search song or artist"
                onChange={(e) => setInputSearch(e.target.value)}
            />
            <Artists artist={filteredArtist} />
            <Songs song={filteredsong} />
            search
        </>
    );
}

function Artists(props) {
    let gg = props
    console.log("filter" + gg);
    return (
        <>
            {/* 
            {
                props.Artists.map((
                    <div>{capital[0]}</div>
                ))} */}
        </>
    );
}

function Songs(props) {
    return (
        <>
            ff
            {/* {props.artist.map((v) => (
                <div>{v.name.common}</div>
            ))} */}
        </>
    );
}
