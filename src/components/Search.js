import { apiContext } from "../context/apiContext";
import { useContext, useState, useEffect } from "react";

export default function Search() {
    const x = useContext(apiContext);
    const [inputSearch, setInputSearch] = useState("");
    const [filteredsong, setFilteredSong] = useState([]);
    const [filteredArtist, setFilteredArtist] = useState([]);

    useEffect(() => {
        let a = x.filter((v) => {
            return v.name.common
                .toLowerCase()
                .startsWith(inputSearch.toLowerCase());
        });
        let b = x.filter((v) => {
            return v.name.common
                .toLowerCase()
                .startsWith(inputSearch.toLowerCase());
        });
        setFilteredArtist(a);
        setFilteredSong(b);
    }, [inputSearch]);
    return (
        <>
            <input
                type="search"
                placeholder="search song or artist"
                onChange={(e) => setInputSearch(e.target.value)}
            />
            <div className="searchList">
                <Artists id="artists" artist={filteredArtist} />
                <Songs id="songs"  song={filteredsong} />
            </div>
        </>
    );
}

function Artists({ artist }) {
    return (
        <div className="artists">
            {artist.map((v) => {
                return (
                    <>
                        <div key={v.capital}>{v.capital}</div>
                    </>
                );
            })}
        </div>
    );
}

function Songs({ song }) {
    return (
        <div className="songs">
            {song.map((v) => {
                return (
                    <>
                        <div key={v.name.common}>{v.name.common}</div>
                    </>
                );
            })}
        </div>
    );
}
