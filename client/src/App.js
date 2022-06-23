import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Routes, Route, Link, useParams } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import IndividualLot from "./pages/IndividualLot"


function App() {




  return (
    
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<IndividualLot />} />
      </Routes>
    </BrowserRouter>
      
    

  );
}

export default App;
