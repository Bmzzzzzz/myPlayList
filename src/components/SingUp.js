export default function SingUp() {
   
    const showPass = () => {
        let x = document.getElementById("password")
        if (x.type === "password") {
            x.type = "text"
        }
        else { x.type = "password" }
    }
    return(
        <>
           
<h2 className="h">singup</h2>
<div className='input'>

    <form onSubmit={onsubmit} className="wrapper">
       
    <input type="text" id="name" name="name" placeholder="First name" />
        <br /><br />
      
        <input type="text" id="lastname" name="lastname" placeholder="Last name" />
        <br/><br />
        <input type="text" id="username" name="username" placeholder="User name" />
        <br /><br />
      
        <input type="password" id="password" name="password" placeholder="Password" />
        <br/><br />
        
        <input type="Password" id="valid Password" name="valid Password" placeholder="Valid Password" />
        <br /><br />
        <label htmlFor="checkbox"> Show password </label>
        <input type="checkbox" onClick={showPass} />
        <input type="submit" className="btn"  />
    </form>
</div>


        </>
    )
}