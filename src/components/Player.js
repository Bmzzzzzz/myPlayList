import React, {useState} from 'react'
import "../style/popup.css"
import ReactPlayer from 'react-player/youtube'
import { debounce } from 'lodash'

export default function Player({url, close}) {

    const [plays, setPlays] = useState('')

  return (
    <div className='player-overlay' onClick={()=>close(false)} >
        <div className={plays} style={{margin: "auto"}} >
          
        <ReactPlayer onPlay={()=>setPlays("player")} url={url} controls={true} playing={true} onKeyDown={(e)=>{if(e.key==="Escape"){console.log("close"); close(false);}}} />
        
        </div>
    </div>
  )
}