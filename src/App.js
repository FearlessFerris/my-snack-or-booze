// Main Application 


// Dependencies 
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components & Other Necessary Files 
import Loading from './Loading';
import Home from './Home';
import NavBar from './NavBar';

// App Component 
function App() {

  const [ isLoading, setIsLoading ] = useState(true);

  useEffect( () => {
    setTimeout( () => { setIsLoading( false )}, 2000 );
  }, []);

  return (
    <div className="App">
      <BrowserRouter> 
        <NavBar /> 
      </BrowserRouter>
      <h1> Restaurant </h1> 
      { isLoading ? <Loading /> : <Home /> }
    </div>
  );
}

export default App;
