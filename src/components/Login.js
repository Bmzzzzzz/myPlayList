import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import'../style/app.css'

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
            setUser(users[index])
            console.log(users[index]);
        }
        else { alert("error") }
    }

    function validation(name, pass) {
        let flag = false;
        users.map((v, i) => {
            if (v.username == name && v.password == pass) {
                flag = i;
            }
        })
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
                    <label for='username' className='input'>Username: </label>
                    <input type="text" id="username" name="username" placeholder="Username" />
                    <br />
                    <label for="password" className='input'>Password: </label>
                    <input type="password" id="password" name="password" placeholder="Password" />
                    <br />
                    <label htmlFor="checkbox"> Show password </label>
                    <input type="checkbox" onClick={showPass} />
                    <input type="submit" className="btn" />
                </form>
                </div>
            
            )
}