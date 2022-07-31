import { useState, useEffect , useRef } from "react";
import { CardPlay, CardContent, CardFooter, CardHeader, CardButton } from './CardPlay'
import * as React from 'react';
import '../style/app.css'


export default function Search() {

    const [inputSearch, setInputSearch] = useState("");
    const inputValue = useRef()
    const [api, setApi] = useState();

    useEffect(() => {

        if (!inputSearch) return
        setApi("")

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
                'X-RapidAPI-Key': '301135241emsh54f069e20bde0f3p172a07jsn98571b0076bd'
            }
        };
        
        fetch('https://simple-youtube-search.p.rapidapi.com/search?query=' + inputSearch, options)
            .then(response => response.json())
            .then(response => { setApi(response.results);console.log(response.results); });

    }, [inputSearch]);


    return (
    <>
        <br />  <br />
        <input
            type="search"
            placeholder="search song or artist"
            ref={inputValue}
            onKeyDown={(e)=>{e.key==="Enter" && setInputSearch(e.target.value)}}
            />
        <button onClick={() => setInputSearch(inputValue.current.value)}>Search</button>
        
        {inputSearch && (api?
        <div className='songs'>
          {api.map((v) => {return (
            <div key={v.id}>
                <CardPlay >
                    <a href={v.url}>
                    <CardHeader>
                            {/* <iframe src={v.url}></iframe>
                            <video src={v.url}></video> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: `<iframe src=https://www.youtube.com/watch?v=Soa3gO7tL-c />` }} /> */}
                            <img src={v.thumbnail.url} />
                    </CardHeader>
                    </a>

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
        </div>
        :<div className="lds-hourglass">Loading.....</div>)}
    </>
    );
}
