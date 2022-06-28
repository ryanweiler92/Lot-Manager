import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import IndividualLot from "./pages/IndividualLot"
import LotEdit from "./pages/LotEdit"

function App() {


  return (
    
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<IndividualLot />} />
        <Route path="/lot/:id" element={<LotEdit />} />
      </Routes>
    </BrowserRouter>
      
    

  );
}

export default App;
