import React, { useEffect } from "react";
import axios from "axios";

export default function Playlist({user}){
    
    useEffect(()=>{
        console.log(user);
        axios.get('http://localhost:3002/api/playlists/userPlaylists',
        { headers: { Authorization: 'Bearer ' + localStorage.userToken } } )
        .then(response =>{
            console.log(response)
            response.status !== 200 && alert(response.statusText)
        })
        .catch(error =>console.log(error));
    },[])

    const createPlaylist =(e)=> {

        e.preventDefault();
        // let formData = new FormData()
        // formData.append('title', e.target.title.value)
        // formData.append('userId', user._id)
        // console.log(e.target.title.value);
        axios.post('http://localhost:3002/api/playlists/',
             {title: e.target.title.value,
            userId: user._id,
            id: new Date().getTime()} ,
            { headers: { 
                // enctype : 'multipart/form-data',
                Authorization: 'Bearer ' + localStorage.userToken
            }}
        )
        .then(response =>{
            console.log(response)
            alert("Playlist "+e.target.title.value+ " added to your playlists")
        })
        .catch(error =>{
            console.log(error)
            alert('"'+e.target.title.value+'" '+error.response.data)
        });
    }

    return(
        <>
        playlist

        <form onSubmit={createPlaylist}>
            <label htmlFor="title"> Create new playlist </label>
            <input name="title" placeholder="Title" />
            <button>Create</button>
        </form>

        </>
    )
}
