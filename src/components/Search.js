import * as React from 'react';
import { useState, useEffect , useRef } from "react";
import { useSearchParams } from 'react-router-dom';
import { CardPlay, CardContent, CardFooter, CardHeader, CardButton } from './CardPlay'
import '../style/app.css'
import Player from './Player';


export default function Search() {


    const inputValue = useRef()
    const [api, setApi] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const [openPlayer, setOpenPlayer] = useState(false);

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
        <input
            type="search"
            placeholder="search song or artist"
            ref={inputValue}
            onKeyDown={(e)=>{ let songSearch= e.target.value; e.key==="Enter" && setSearchParams({songSearch})}}
            />
        <button onClick={() =>{let songSearch=inputValue.current.value; setSearchParams({songSearch})}}>Search</button>
        
        {searchParams.get("songSearch") && (api?
        <div className='songs'>
          {api.map((v) => {return (
              <div key={v.id}>
                <CardPlay >
                    {/* <a href={v.url}> */}
                    <CardHeader>
                            {/* <iframe src={v.url}></iframe>
                            <video src={v.url}></video> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: `<iframe src=https://www.youtube.com/watch?v=Soa3gO7tL-c />` }} /> */}
                            <img src={v.thumbnail.url} alt={v.title} onClick={()=>setOpenPlayer(v.url)} />
                    </CardHeader>
                    {/* </a> */}

                    <CardContent >
                            <p><b>{v.title}</b></p>
                    </CardContent >

                    <CardFooter>
                            <p>duration: {v.duration_formatted}</p>
                    </CardFooter>
                    
                    <CardButton song={v} />
                </CardPlay>

            </div>
          )})}
          {openPlayer && <Player url={openPlayer} close={setOpenPlayer} />}
        </div>
        :<div className="lds-hourglass">Loading.....</div>)}
    </>
    );
}
