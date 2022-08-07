import React, { useRef } from "react";
import { Link, useNavigate } from 'react-router-dom'

export default function Login({setLog}) {
    
    // eslint-disable-next-line
    const navigate = useNavigate()
    const showPassRef = useRef()

    const onsubmit = (e) => {

        e.preventDefault();

        let userInput = e.target.elements.username.value
        let passwordInput = e.target.elements.password.value
   
           fetch('http://localhost:3002/api/users/login', {
                method: "POST",
                body: JSON.stringify({ password: passwordInput, email: userInput }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response=>response.text())
            .then(token=>{
                if ( token === "user not found" ) 
                alert( token );
                else{
                    localStorage.userToken = token;
                    setLog( token );
                    navigate( "/home" );
                }
            })
   
    }

    const showPass = () => {

        let passInputType = showPassRef.current.type;
        if (passInputType === "password") {
            showPassRef.current.type = "text"
        }
        else { showPassRef.current.type = "password" }
    }

    return (

        <div className='input'>
                
            <p>Not a member? <Link to="/signup" >Register</Link> </p>

            <form onSubmit={onsubmit} className="wrapper">

                <label htmlFor='username' className='input'>Username: </label>
                <input type="text" id="username" name="username" placeholder="Username" />

                <br />
                <label htmlFor="password" className='input'>Password: </label>
                <input type="password" id="password" name="password" placeholder="Password" ref={showPassRef} />

                <br />
                <label htmlFor="checkbox"> Show password </label>
                <input type="checkbox" onClick={showPass} />

                <br />
                <button className="button" >Login</button>
            </form>
        </div>

    )
}