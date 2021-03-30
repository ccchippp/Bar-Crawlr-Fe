
import React from "react";
import './App.css';
// import Container from './Container';
import Bootstrap from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleApiWrapper from './GoogleApiWrapper';
import Nav from './Nav'

// state = {
//   location: 'Washington D.C.',
//   bars: []
// }



function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      {/* <Container md/> */}
      </header>
      <div>
      </div>
      <div className='ApiWrapper'>
        <GoogleApiWrapper />
      </div>
    </div>
  );
}

export default App;
