import React from "react";
// import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import {
  Routes,
  Route  
} from "react-router-dom";
// import OtherComponent from 'path/to/Other/Component.jsx
// import { useEffect } from "react"
// import { useState } from "react"
// import 'style/sheet/location/styles.css'
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";
import WhiskyContainer from "./components/WhiskyContainer";
import ErrorPage from "./components/ErrorPage";
import './App.css';



const App = () => {

  // hook stuff goes here
  // helper functions go here

  return (
    // <div className="glass">
    //     <h1>Scotch Project</h1>
    //     <WhiskyContainer/>
    // </div>
      <div className="glass">
        <h1>Scotch Project</h1>
        <Routes>
          <Route path="/" element={<Login/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/register" element={<Register/>}>
          </Route>
          <Route path="/dashboard" element={<WhiskyContainer/>}>
          </Route>
          {/* <Route path="/tastinglist" element={<TastingList/>}>
          </Route> */}
          <Route path="/settings" element={<Settings/>}>
          </Route>
          <Route path="*" element={<ErrorPage/>}>
          </Route>
        </Routes>
      </div>
  )
   
}

export default App;