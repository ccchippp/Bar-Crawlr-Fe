
import React from "react";
import './App.css';
import MainContainer from './Containers/MainContainer';
import bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <body>
        <div className='ApiWrapper'>
         <GoogleApiWrapper />
        </div>
        <div>
        <MainContainer />
        </div>
        </body>

      
    </div>
  );
}

export default App;
