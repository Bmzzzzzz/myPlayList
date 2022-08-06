import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../style/playlist.css'


export default function Playlist({user}){

    const [playlists, setPlaylists] = useState("")
    const [newPlaylist, setNewPlaylists] = useState(0)
    
    useEffect(()=>{

        axios.get('http://localhost:3002/api/playlists/userPlaylistsNames',
        { headers: { Authorization: 'Bearer ' + localStorage.userToken } } )
        .then(response =>{
            console.log(response.data);
            setPlaylists(response.data) 
        })
        .catch(error =>{
            console.log(error)
            alert(error.response.data);
        });

    },[newPlaylist])

    const createPlaylist =(e)=> {

        e.preventDefault();
     
        axios.post('http://localhost:3002/api/playlists/',
             {title: e.target.title.value,
            userId: user._id,
            id: new Date().getTime()} ,
            { headers: { 
                Authorization: 'Bearer ' + localStorage.userToken
            }}
        )
        .then(response =>{
            console.log(response)
            setNewPlaylists(newPlaylist+1)
            alert(`Playlist "${e.target.title.value}" added to your playlists`)
        })
        .catch(error =>{
            console.log(error)
            alert(`"${e.target.title.value}" ${error.response.data}`)
        });
    }

    return(
        <>

        playlists:

        <ul className="playlists-list">
          {playlists && 
            playlists.map(v=> <PlaylistList key={v._id} title={v.title} id={v._id} /> )
          }
        </ul>

        <form onSubmit={createPlaylist}>
            <label htmlFor="title"> Create new playlist </label>
            <input name="title" placeholder="Title" />
            <button>Create</button>
        </form>

        </>
    )
}


function PlaylistList({title,id}) {

    const navigate = useNavigate()

  return (
    <li className='playlist-list-item' onClick={()=>navigate(`/playlist/${title}`,{state:{id}})}>
      {title}
    </li>
  )
}