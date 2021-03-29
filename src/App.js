
import React from "react";
import './App.css';
import MainContainer from './Containers/MainContainer';
import bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleApiWrapper from './GoogleApiWrapper';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
        <div className='ApiWrapper'>
         <GoogleApiWrapper />
        </div>
        <div>
        <MainContainer />
        </div>
      
    </div>
  );
}

export default App;
