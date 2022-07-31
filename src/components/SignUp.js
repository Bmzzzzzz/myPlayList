import React, { useRef } from "react";
import { Link } from "react-router-dom";



export default function SignUp() {
    
    async function validation(firstNameInput, lastNameInput, emailInput, passwordInput) {
    
       let inputToken = await fetch('http://localhost:3002/api/users/register', {
           method: "POST", headers: {
               "Content-Type": "application/json"
           }, body: JSON.stringify({ firstName: firstNameInput, lastName: lastNameInput, email: emailInput, password: passwordInput })
       })
     
       localStorage.userToken = inputToken;
    }
    const onsubmit = (e) => {
       e.preventDefault();
    
       let firstNameInput = e.target.elements.firstName.value
       let lastNameInput = e.target.elements.lastName.value
       let emailInput = e.target.elements.email.value
       let passwordInput = e.target.elements.password.value
       let validPasswordInput = e.target.elements.validPassword.value
    
       if (validPasswordInput === passwordInput) {
           // console.log(firstNameInput, lastNameInput,emailInput, passwordInput,validPasswordInput);
           validation(firstNameInput, lastNameInput, emailInput, passwordInput);
       }
       else { console.log("error password input"); }
    
    }

    const showPassRef = useRef()

    const showPass = () => {

        let passInputType = showPassRef.current.type;
        if (passInputType === "password") {
            showPassRef.current.type = "text"
        }
        else { showPassRef.current.type = "password" }
    }

    return (
        <>

            <h2 className="h">signup</h2>
            <p>Already a member? <Link to="/login" >Login</Link> </p>
            <div className='input'>

                <form onSubmit={onsubmit} className="wrapper">

                    <input type="text" id="firstName" name="firstName" placeholder="First name" />
                    <br /><br />
                    <input type="text" id="lastName" name="lastName" placeholder="Last name" />
                    <br /><br />
                    <input type="text" id="email" name="email" placeholder="email" />
                    <br /><br />

                    <input type="password" id="password" name="password" placeholder="Password" ref={showPassRef} />
                    <br /><br />

                    <input type="Password" id="validPassword" name="validPassword" placeholder="Valid Password" />
                    <br /><br />
                    <label htmlFor="checkbox"> Show password </label>
                    <input type="checkbox" onClick={showPass} />
                    <input type="submit" className="btn" />
                </form>
            </div>


        </>
    )
}