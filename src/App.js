import {useContext, useState} from "react"
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import './style/app.css'
import {UserContext} from "./context/UserContext";

function App() {
  const setUser = useState(false)

  return (
 <>
 <UserContext.Provider value={setUser}>
 <Header />
 <Main />
 </UserContext.Provider>
 </>
  );
}

export default App;
