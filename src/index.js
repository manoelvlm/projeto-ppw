import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from './Components/questions/questions';
import Login from './Components/login/login';
import Signup from './Components/signup/signup';
import ProtectedRoute from './util/ProtectedRoute';
import Maps from './Components/maps/maps';

import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";

ReactGA.initialize("G-0J755KBED3");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={'/'}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={
          <ProtectedRoute>
            <Questions />
          </ProtectedRoute>
        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="maps" element={<Maps />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

