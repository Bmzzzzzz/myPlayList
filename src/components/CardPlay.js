import React from "react"

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
    const addToPlaylist =(song)=>{
        //navigate to playlist page
            //get users playlists names
            //post to playlist
    }
    return <button className="CardButton" onClick={()=>addToPlaylist(song)}>
            Add to my playlist
           </button>
}
function CardFooter(props) {
    return <div className="cardFooter">{props.children}</div>
}

export { CardPlay, CardContent, CardFooter, CardHeader, CardButton }