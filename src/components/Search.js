import { apiContext } from "../context/apiContext";
import { useContext, useState, useEffect } from "react";
import { CardPlay, CardContent, CardFooter, CardHeader, CardButton } from './CardPlay'
import * as React from 'react';
import '../style/app.css'





export default function Search() {
    const x = useContext(apiContext);
    const [inputSearch, setInputSearch] = useState("");
    const [input, setInput] = useState("")
    const [filteredsong, setFilteredSong] = useState([]);
    const [filteredArtist, setFilteredArtist] = useState([]);
    const [api, setApi] = useState([]);
    console.log(x);




    useEffect(() => {
        if (!inputSearch) return
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
                'X-RapidAPI-Key': '301135241emsh54f069e20bde0f3p172a07jsn98571b0076bd'
            }
        };

        
        fetch('https://simple-youtube-search.p.rapidapi.com/search?query=' + inputSearch, options)
            .then(response => response.json())
            .then(response => { setApi(response.results); console.log(response); });

    }, [inputSearch]);



    if (!api) return (<><div className="lds-hourglass">loding.....</div></>);
    return (
        <>
            <br />  <br />
            <input
                type="search"
                placeholder="search song or artist"
                // onChange={(e) => setInputSearch(e.target.value)}
                onChange={(e) => setInput(e.target.value)}

            />
            <button onClick={() => setInputSearch(input)}>click</button>
            <div kay="songs" className="searchList">
                {/* <Artists id="artists" artist={api} /> */}
                <Songs kay="songs" id="songs" song={api} />
            </div>
        </>
    );
}







function Songs({ song }) {
    return (
        <div key={song.id} className="songs">
            {song.map((v) => {
                return (

                    <div className='items'>
                        <CardPlay key={v.url}>
                            <CardHeader>
                                <h1>
                                    {/* <iframe>{v.url}</iframe> */}
                                    <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/3jgH5weXYwA' />" }} />
                                </h1>
                            </CardHeader>

                            <CardContent key={v.title}>
                                <div>
                                    <p><b>{v.title}</b></p>
                                </div>
                            </CardContent >

                            <CardFooter key={v.duration_formatted}>
                                <div key={v.duration_formatted}>
                                    <p>duration: {v.duration_formatted}</p>
                                </div>
                            </CardFooter>

                            {/* 
                            {/* <CardButton>
                        <div>
                          <button onClick={() => fruitsFilter(v.uploadedAt)}>remove me</button>
                        </div>
                      </CardButton> */}
                        </CardPlay>

                    </div>

                   
                );
            })}
        </div >
    );
}

{/* 
{v.thumbnail.url} */}