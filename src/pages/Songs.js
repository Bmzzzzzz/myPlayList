import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useParams, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CardContainer, CardPlay } from '../components/CardPlay'
import { popupContext } from '../context/popupContext'


export default function Songs() {

    const navigate = useNavigate()
    const {title} = useParams()
    const {state, pathname} = useLocation()
    const [songs, setSongs] = useState()
    const [newFech, setNewFech] = useState(0)
    const setPopup = useContext(popupContext)

    const myPath = ()=>{
        return pathname.startsWith("/playlist") ?
        "allSongsInPlaylist/"+state.id :
        'userSongs'
        
    }

    useEffect(() => {

        axios.get('http://localhost:3002/api/songs/'+myPath(),
        { headers: { Authorization: 'Bearer ' + localStorage.userToken } } )
        .then(response =>{
            response.data.sort((a,b)=>{
                let x = a.title.toLowerCase(), 
                    y = b.title.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;    
            });
            console.log(response.data);
            setSongs(response.data);
        })
        .catch(error =>{
            console.log(error)
            setPopup(error.response.data);
        });

    },[newFech, title ])

    const playAll =()=>{

        let urlArr = songs.map(v=>v.url)
        navigate(`${pathname}/all-songs`, {state:{url: urlArr}})
    }

  return (

    <>
        <div>{title || "All Songs"}</div>

        {songs ? (
          songs.length ?
            <>
              <button onClick={playAll} >Play All</button>
  
              <CardContainer>
                  {songs.map(s =><CardPlay key={s.id} song={s} btn={"del"} setNewFech={setNewFech} />)} 
              </CardContainer> 
            </>

            : <div>No Songs</div>)

          :<div className="lds-hourglass">Loading.....</div>
        }

        <Outlet />
    </>

  )
}
