import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Movies from './movies';
import Home from './home';

function App() {
  

  return (
    <Router>
    <div className="App">
    <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
       <Routes>
       
          <Route path='/' element={ <Home />} />
          <Route path='/movies' element={ <Movies/>} />
        
   
          </Routes>
    </div>
    </Router>
  );
}

export default App;
