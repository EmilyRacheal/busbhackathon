import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/home.jsx"
import Login from "./Pages/Auth/login/login.jsx"
import Signup from './Pages/Auth/signup/signup';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
