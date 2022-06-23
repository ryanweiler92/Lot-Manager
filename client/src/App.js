import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation"
import Home from "./pages/Home"


function App() {




  return (
    <Router>
      <Navigation />
      <Home />
    </Router>

  );
}

export default App;
