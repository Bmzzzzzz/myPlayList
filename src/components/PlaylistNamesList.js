import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { userDetailContext } from "../context/userDetailContext";


export default function PlaylistNamesList({song, close}){

    const {id, title, url, duration_formatted, thumbnail} = song;
    const [playlists, setPlaylists] = useState()
      // eslint-disable-next-line
    const [user, setUser] = useContext(userDetailContext)

    const add = (playlistId, PlaylistTitle)=>{
        axios.post('http://localhost:3002/api/songs/',
        {
            id,
            title,
            url,
            duration_formatted,
            "thumbnail.url": thumbnail.url,
            playlistId,
            userId : user._id
        },
        { headers: { Authorization: 'Bearer ' + localStorage.userToken } }
        )
        .then(res=>{
            console.log(res)
            alert( `"${title}" added to "${PlaylistTitle}"` )
        })
        .catch(error =>{
            console.log(error);
            alert(error.response.data)
        });
        
        close('');
    }

    useEffect(()=>{

        axios.get('http://localhost:3002/api/playlists/userPlaylistsNames',
        { headers: { Authorization: 'Bearer ' + localStorage.userToken } } )
        .then(response =>{
            console.log(response);
            setPlaylists(response.data) 
        })
        .catch(error =>{
            console.log(error)
            alert(error.response.data);
        });
    },[])

    return(
      <ul>
          {playlists&&playlists.map(playlist=>{ return(
            <PlaylistItem key={playlist._id}> 
              <li onClick={()=>add(playlist._id,playlist.title)}>
                  {playlist.title}
              </li> 
            </PlaylistItem>
          )})}
      </ul>
    )
}

function PlaylistItem(props){
    return <>{props.children}</>
}