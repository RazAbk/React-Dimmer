import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useState } from 'react'
import * as ReactDOM from 'react-dom';
import { ReactDimmer } from '../src/react-dimmer'

const App = () => {

  const [isDimmer, setDimmer] = useState(false)

  const handleClick = () => {
    setDimmer(prevState => !prevState)
  }

  console.log('i am')

  return (
    <>
      <div className="app">
        <button onClick={handleClick}>click me</button>
      </div>
      <ReactDimmer isOpen={isDimmer} exitDimmer={setDimmer} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
