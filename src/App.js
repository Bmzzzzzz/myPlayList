import { useContext, useState, useEffect } from "react"
//import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import './style/app.css'
import { UserContext } from "./context/UserContext";
import { apiContext } from "./context/apiContext";
import './style/loding.css'

function App() {
  const setUser = useState(false)
  // const [api, setApi] = useState(false)

  // useEffect(() => {



  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
  //       'X-RapidAPI-Key': '301135241emsh54f069e20bde0f3p172a07jsn98571b0076bd'
  //     }
  //   };

  //   fetch('https://simple-youtube-search.p.rapidapi.com/search?query=pop&safesearch=false', options)
  //     .then(response => response.json())
  //     .then(response => { setApi(response); });
  
  // }, []);


  // if (!api) return (<><div className="lds-hourglass">loding.....</div></>);
  return (
    <>
      <div className="spin">
        <div className="eq-spinner"><i /></div>
      </div>
      {/* <apiContext.Provider value={api}> */}
        <UserContext.Provider value={setUser}>
          <Header />
          <Main />
        </UserContext.Provider>
      {/* </apiContext.Provider> */}
    </>
  );
}

export default App;
