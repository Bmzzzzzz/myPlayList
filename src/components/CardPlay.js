import React, { useState, useEffect } from "react"
// import { userDetailContext } from "../context/userDetailContext"
import axios from "axios"
// import { useNavigate } from "react-router-dom";

function CardPlay(props) {

    return <div className="card">{props.children}</div>
}
function CardHeader(props) {
    return <div className="cardHeader">{props.children}</div>
}

function CardContent(props) {
    return <div className="cardContent">{props.children}</div>
}

function CardButton({song}) {

    const [showPlaylists, setShowPlaylists] = useState(false)
    // const navigate = useNavigate();
    
    const addToPlaylist =()=>{

        setShowPlaylists(true)
        //get users playlists names
        //post to playlist
        // navigate('/playlist')
    }
    return<>
           <button className="CardButton" onClick={addToPlaylist}>
            Add to my playlist
           </button>
           {showPlaylists && <PlaylistList song={song} />}
    </> 
}

function CardFooter(props) {
    return <div className="cardFooter">{props.children}</div>
}

function PlaylistList({song}){

        // const user= useContext(userDetailContext)
        const [playlists, setPlaylists] = useState()

        const add = (id, title)=>{
            axios.post('http://localhost:3002/api/songs/',
            {
                id: song.id,
                title: song.title,
                url: song.url,
                duration: song.duration_formatted,
                thumbnail: song.thumbnail.url,
                playlistId: id
            },
            { headers: { Authorization: 'Bearer ' + localStorage.userToken } }
            )
            .then(res=>{
                console.log(res)
                alert( '"'+song.title+'"'+" added to "+'"'+title+'"' )
            })
            .catch(error =>{
                console.log(error);
                alert(error.response.data)
            });
        }

        useEffect(()=>{

            axios.get('http://localhost:3002/api/playlists/userPlaylistsNames',
            { headers: { Authorization: 'Bearer ' + localStorage.userToken } } )
            .then(response =>{
                console.log(response);
                response.status === 200 ? 
                setPlaylists(response.data) : 
                alert(response.statusText)
            })
            .catch(error =>console.log(error));
        },[])

    return(
      <ul>
          {playlists&&playlists.map(playlist=>{ return(
            <PlaylistItem key={playlist._id}> <li onClick={()=>add(playlist._id,playlist.title)}>{playlist.title}</li> </PlaylistItem>
          )})}
      </ul>
    )
}

function PlaylistItem(props){
    return <>{props.children}</>
}

export { CardPlay, CardContent, CardFooter, CardHeader, CardButton }