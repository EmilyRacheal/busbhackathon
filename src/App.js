import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/home.jsx"
import Login from "./Pages/Auth/login/login.jsx"
import Signup from './Pages/Auth/signup/signup';
import DashBoard from "./Pages/Dashboard/Employeedashboard/employeedashboard.jsx"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
