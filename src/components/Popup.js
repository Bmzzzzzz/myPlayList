import React from 'react'

export default function Popup({content, close}) {
  return (
    <div className='player-overlay' onClick={()=>close('')} >
        <div className='player'>
            <div className='popup-content'>{content}</div>
        </div>
    </div>
  )
}
