import { useContext, useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import './style/app.css'
import { UserContext } from "./context/UserContext";
import { apiContext } from "./context/apiContext";

function App() {
  const setUser = useState(false)
  const [api, setApi] = useState('')

  useEffect(() => {
    setApi("loding.....")

    fetch("https://restcountries.com/v3.1/all") // promise
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
      });
  }, []);

  return (
    <>
      <apiContext.Provider value={api}>
        <UserContext.Provider value={setUser}>
          <Header />
          <Main />
        </UserContext.Provider>
      </apiContext.Provider>
    </>
  );
}

export default App;
