
import React from "react";
import './App.css';
import Container from './Container';
import Bootstrap from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleApiWrapper from './GoogleApiWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Container md/>
      </header>
      <div >
        <GoogleApiWrapper />
      </div>
    </div>

  );
}

export default App;
