import {useState} from 'react'
export default function Login(){
   const onsubmit =(e)=>{
       e.preventDefault();
   }

    return(
        <>
        login
        <form onSubmit={onsubmit}>
            <input type="text" name="username" placeholder="Username"  />
        </form>
        </>
    )
}