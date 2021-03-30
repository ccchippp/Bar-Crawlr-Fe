import React from 'react'
import { LandingPage } from './LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom'
import { Search } from './Search/Search'

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/' component={LandingPage}/>
    </Switch> 
  );
};
export default App;










// import React from "react";
// import './App.css';
// import MainContainer from './Containers/MainContainer';
// import bootstrap from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import GoogleApiWrapper from './GoogleApiWrapper';
// import Nav from './Nav'

// // state = {
// //   location: 'Washington D.C.',
// //   bars: []
// // }

// // componentDidMount(){
// //   fetch('URL')
// //   .then(r => r.json())
// //   .then(data => 
// // this.setState({
// //   location: ,
// //   bars: 
// // })
// // )}


// function App() {
//   return (
//     <div className="App">
//       <header className="header">
//         <Nav />
//       {/* <Container md/> */}
//       </header>
//       <body>
//         <div className='MainContainer'>
//           <MainContainer />
//         </div>
//       </body>

      
//     </div>
//   );
// }

// export default App;
