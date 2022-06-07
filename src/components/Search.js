import { apiContext } from "../context/apiContext";
import { useContext, useState, useEffect } from "react";

export default function Search() {
    const x = useContext(apiContext);
    const [inputSearch, setInputSearch] = useState("");
    const [filteredsong, setFilteredSong] = useState([]);
    const [filteredArtist, setFilteredArtist] = useState([]);
    const [api, setApi] = useState([]);
    console.log(x);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
                'X-RapidAPI-Key': '301135241emsh54f069e20bde0f3p172a07jsn98571b0076bd'
            }
        };

        fetch('https://simple-youtube-search.p.rapidapi.com/search?query=pop', options)
            .then(response => response.json())
            .then(response => { setApi(response.results); });

    }, []);





    //     useEffect(() => {
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
    //                 'X-RapidAPI-Key': '301135241emsh54f069e20bde0f3p172a07jsn98571b0076bd'
    //             }
    //         };

    //         fetch('https://simple-youtube-search.p.rapidapi.com/search?query=' + inputSearch, options)
    //             .then(response => response.json())
    //             .then(response => { setApi(response.results); });

    //     }, [inputSearch]);




    return (
        <>
            <input
                type="search"
                placeholder="search song or artist"
                onChange={(e) => setInputSearch(e.target.value)}
            />
            <div className="searchList">
                <Artists id="artists" artist={api} />
                <Songs id="songs" song={api} />
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
                        <div key={v.channel.id}>{v.channel.name}</div>
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
                        <div key={v.title}>{v.title}</div>
                    </>
                );
            })}
        </div>
    );
}
