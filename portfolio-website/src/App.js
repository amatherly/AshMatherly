import logo from './logo.svg';
import './App.css';
import React from 'react';
import Page from './Components/Page';
import background from './Videos/background video.mp4';

function App() {
    return (
        <div className="App">
            <div>
                <video autoPlay loop muted className="background">
                    <source src={background} type="video/mp4"/>
                </video>
                <Page/>
            </div>
        </div>
    );
}

export default App;
