import React, { useState, useEffect, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import PlaylistNamesList from "./PlaylistNamesList";
import { BsFillPlayFill } from 'react-icons/bs'
import axios from "axios";
import '../style/cardPlay.css'
import { popupContext } from '../context/popupContext'
// import { confirmAlert } from 'react-confirm-alert';       //uninstall 
// import 'react-confirm-alert/src/react-confirm-alert.css'; 


function CardPlay({song, btn, setNewFech}) {
    
    const {title, url, duration_formatted} = song;
    const navigate = useNavigate()
    const {pathname, search} = useLocation()
    const [isButton, setIsButton] = useState("")
    
    useEffect(() =>{
        btn ==="add" && setIsButton(true)
    },[])
    
    const playSong = ()=>{
        navigate(`${pathname}/${title}${search}`, {state:{url}})
    }
    
    const del = (e)=>{
        if (btn === "del"){
            e.preventDefault();
            setIsButton(!isButton);
        }
    }
    
    return(<>

      <div className="card" onContextMenu={del}>
        <CardHeader>
            <img src={song.thumbnail.url} alt={title} onClick={playSong} />
            <BsFillPlayFill className="play-icon" onClick={playSong} />
        </CardHeader >

        <CardContent >
            <p><b>{title}</b></p>
        </CardContent >
        
        <CardFooter>
            <p>duration: {duration_formatted}</p>
        </CardFooter>

        {isButton && <CardButton song={song} what={btn} setNewFech={setNewFech} /> }
        
      </div>

    </>)
}


function CardButton({song, what, setNewFech}) {
    
    const [showPlaylists, setShowPlaylists] = useState(false)
    const setPopup = useContext(popupContext)
    
    const addOrRemove = async()=>{

        if (what === "add") 
        setShowPlaylists(true) 
        
        else{
            // confirmAlert({message:`Are you sure you want to delete ${song.title}?`}) &&
            
            await axios.delete(`http://localhost:3002/api/songs/${song._id}/${song.playlistId}`,
        { headers: { Authorization: 'Bearer ' + localStorage.userToken }})
        .then((res)=>{console.log(res.data); setPopup(`${song.title} removed successfully`)})
        .catch((error)=>{setPopup(error.response.data)})
        
        setNewFech(Math.random())
    }
}

return<>
           <button className="CardButton" onClick={addOrRemove}>
            {what==="add"? "Add to my playlist": "Remove Song"}
           </button>
           {showPlaylists && <PlaylistNamesList song={song} close={setShowPlaylists} />}
    </> 
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

export { CardPlay, CardContainer, CardButton }