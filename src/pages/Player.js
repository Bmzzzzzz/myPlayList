import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import "../style/player.css"
import ReactPlayer from 'react-player/youtube'


export default function Player() {

    const [plays, setPlays] = useState('')
    // const url = useOutletContext()
    const navigate = useNavigate()
    const {state} = useLocation()

  return (
    <div className='player-overlay' onClick={()=>navigate(-1)} >
        <div className={plays} style={{margin: "auto"}} >
          
        <ReactPlayer 
          onPlay={()=>setPlays("player")} 
          url={state.url} controls={true} 
          playing={true} 
          // onKeyDown={(e)=>{if(e.key==="Escape"){console.log("close"); close(false);}}} 
        />
        
        </div>
    </div>
  )
}
