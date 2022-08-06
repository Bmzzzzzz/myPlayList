import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import PlaylistNamesList from "./PlaylistNamesList";
import { BsFillPlayFill } from 'react-icons/bs'


function CardPlay(props) {

    const {title, url, duration_formatted} = props.song;
    const navigate = useNavigate()
    const {pathname, search} = useLocation()

    const playSong = ()=>{

        navigate(`${pathname}/${title}${search}`, {state:{url}})
    }

    return(<>
      <div className="card">
        <CardHeader>
            <img src={props.song.thumbnail.url} alt={title} onClick={playSong} />
            <BsFillPlayFill className="play-icon" onClick={playSong} />
        </CardHeader >

        <CardContent >
            <p><b>{title}</b></p>
        </CardContent >
        
        <CardFooter>
            <p>duration: {duration_formatted}</p>
        </CardFooter>

        {props.children}
        
      </div>

    </>)
}

    function CardContainer(props) {
        return <div className="songs">{props.children}</div>
    }

    function CardHeader(props) {
        return <div className="cardHeader">{props.children}</div>
    }
    
    function CardContent(props) {
        return <div className="cardContent">{props.children}</div>
    }

    function CardFooter(props) {
        return <div className="cardFooter">{props.children}</div>
    }

function CardButton({song}) {

    const [showPlaylists, setShowPlaylists] = useState(false)
    
    const addToPlaylist =()=>{

        setShowPlaylists(true)
    }

    return<>
           <button className="CardButton" onClick={addToPlaylist}>
            Add to my playlist
           </button>
           {showPlaylists && <PlaylistNamesList song={song} />}
    </> 
}

export { CardPlay, CardContainer, CardButton }