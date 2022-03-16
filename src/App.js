import "./styles/App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import MyNavbar from "./components/UI/navbar/MyNavbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./components/contex";
import { useState } from "react";


function App() {

  const [ isAuth, setIsAuth ] = useState(false);

  useEffect(() => {
    if (localStorage.getItem( "auth")) {
      setIsAuth(true);
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
    <Router>
      <MyNavbar/>
      <AppRouter/>
    </Router> 
    </AuthContext.Provider>
  );
}

export default App;