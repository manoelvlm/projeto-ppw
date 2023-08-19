import PortalNavbar from './Components/portalnav/portalnav';
import './App.css';
import { Outlet } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import React, { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

  console.log(isLoggedIn);
  return (
    <React.Fragment>
        <Outlet/>
    </React.Fragment>
  );
}

export default App;
