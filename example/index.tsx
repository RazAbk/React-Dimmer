import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useState } from 'react'
import * as ReactDOM from 'react-dom';
import { ReactDimmer } from '../src/react-dimmer'
import './app.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const App = () => {

  const [isDimmer, setDimmer] = useState(false)

  const handleClick = () => {
    setDimmer(prevState => !prevState)
  }

  return (
    <>
      <div className="app">
        <div className="header">
          <GiHamburgerMenu className="menu-btn" onClick={handleClick}/>
          <h1>Example App</h1>
          <div className="nav">
          </div>
        </div>
        <div className="body">
          <button onClick={handleClick}>Open Modal</button>
        </div>
      </div>

      <ReactDimmer isOpen={isDimmer} exitDimmer={setDimmer} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
