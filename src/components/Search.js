import { apiContext } from "../context/apiContext";
import { useContext, useState, useEffect } from "react";

export default function Search() {
    const x = useContext(apiContext);
    const [inputSearch, setInputSearch] = useState("a");
    const [filteredsong, setFilteredSong] = useState("a");
    const [filteredArtist, setFilteredArtist] = useState("a");
    const a= x.filter((v) => {
        v.name.common.toLowerCase().startsWith(inputSearch.toLowerCase());
    })
    console.log(a);
    useEffect(() => {
        let b=   x.filter((v) => {
            v.name.common.toLowerCase().startsWith(inputSearch.toLowerCase());
        })
        setFilteredArtist(a
        );
        setFilteredSong(b
        );
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
    return (
        <>
       { console.log(props.artist)}
            {/* {props.artist.map((v) => (
                <div>{v.capital[0]}</div>
            ))} */}
        </>
    );
}

function Songs(props) {
    return (
        <>
            {/* {props.song.map((v) => (
                <div>{v.name.common}</div>
            ))} */}
        </>
    );
}
