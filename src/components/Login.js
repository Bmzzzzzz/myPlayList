import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import '../style/app.css'
import React from "react";


const users = [
    { id: 1, username: "ariel", password: "asdf" },
    { id: 2, username: "bezalel", password: "1234" }]

export default function Login() {
    const onsubmit = (e) => {
        e.preventDefault();
        let userInput = e.target.elements.username.value
        let passwordInput = e.target.elements.password.value
        console.log(userInput, passwordInput);
        let index = -1;

        if (index = validation(userInput, passwordInput)) {
            setUser(1)
            console.log(index);

        }
        else { alert("error") }
    }

    function validation(name, pass) {
        const token = ""
        const flag=false;
        
           flag= fetch('http://localhost:3002/api/users/login', {
                method: "POST", headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ password: pass, email: name })
            })
    

        // .then(response => response.json())
        // .then(response => { setApi(response.results); console.log(response); });
        // let flag = false;
        // users.map((v, i) => {
        //     if (v.username == name && v.password == pass) {
        //         flag = i;
        //     }
        // })
        console.log(flag);
         return flag;
    }


    const showPass = () => {
        let x = document.getElementById("password")
        if (x.type === "password") {

            x.type = "text"
        }
        else { x.type = "password" }
    }

    const [user, setUser] = useContext(UserContext)


    return (

        <div className='input'>

            <form onSubmit={onsubmit} className="wrapper">
                <label htmlFor='username' className='input'>Username: </label>
                <input type="text" id="username" name="username" placeholder="Username" />
                <br />
                <label htmlFor="password" className='input'>Password: </label>
                <input type="password" id="password" name="password" placeholder="Password" />
                <br />
                <label htmlFor="checkbox"> Show password </label>
                <input type="checkbox" onClick={showPass} />
                <input type="submit" className="btn" />
            </form>
        </div>

    )
}