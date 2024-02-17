import logo from './logo.svg';
import './App.css';
import React from 'react';
import Page from './Components/Page';
import background from './images/background.png';
function App() {
  return (
    <div className="App" >
      <div className="background" style={{
        backgroundImage: `url(${background})`
      }}></div>
      <Page />

    </div>
  );
}

export default App;
