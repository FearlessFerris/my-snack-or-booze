// Main Application 


// Dependencies 
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom';

// Components & Other Necessary Files 
import Loading from './Loading';
import Home from './Home';
import NavBar from './NavBar';
import Drinks from './Drinks';
import Snacks from './Snacks';

// App Component 
function App() {

  const [ isLoading, setIsLoading ] = useState(true);

  useEffect( () => {
    setTimeout( () => { setIsLoading( false )}, 2000 );
  }, []);

  return (
    <div className="App">
      <h1> Ferris's Cafe </h1> 
      {/* { isLoading ? <Loading /> : <Home /> } */}
      <BrowserRouter> 
        <Routes> 
          <Route path = '/' element = { <Home /> }/>
          <Route path = '/snacks' element = { <Snacks /> }/>
          <Route path = '/drinks' element = { <Drinks /> }/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
