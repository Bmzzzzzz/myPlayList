import * as React from 'react';
import { useState, useEffect , useRef } from "react";
import { Outlet, useSearchParams } from 'react-router-dom';
import { CardPlay, CardContainer } from '../components/CardPlay'
import '../style/app.css'


export default function Search() {


    const inputValue = useRef()
    const [api, setApi] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {

        if (!searchParams.get("songSearch")) return
        setApi("")

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
                'X-RapidAPI-Key': '301135241emsh54f069e20bde0f3p172a07jsn98571b0076bd'
            }
        };
        
        fetch('https://simple-youtube-search.p.rapidapi.com/search?query=' + searchParams, options)
            .then(response => response.json())
            .then(response => { setApi(response.results);console.log(response.results); });

    }, [searchParams]);


    return (
    <>
        <br />  <br />
        <div>
        <input
            type="search"
            placeholder="search song or artist"
            ref={inputValue}
            onKeyDown={(e)=>{ let songSearch= e.target.value; e.key==="Enter" && setSearchParams({songSearch})}}
        />
        </div>
        {/* <button onClick={() =>{let songSearch=inputValue.current.value; setSearchParams({songSearch})}}>Search</button> */}
        
        {searchParams.get("songSearch") && (
            api?
              <CardContainer>
                {api.map( v => <CardPlay key={v.id} song={v} btn={"add"} /> )}
              </CardContainer>

            :<div className="lds-hourglass">Loading.....</div>
        )}
        <Outlet />
    </>
    );
}
