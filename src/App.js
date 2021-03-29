import './App.css';
import GoogleApiWrapper from './GoogleApiWrapper';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
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
