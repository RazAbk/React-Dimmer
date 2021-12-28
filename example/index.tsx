import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useState } from 'react'
import * as ReactDOM from 'react-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import './index.css'
import { ReactDimmer } from '../src/react-dimmer'
import { Modal } from './components/Modal';
import { Menu } from './components/Menu';

const App = () => {

  const [isModalOpen, setModal] = useState(false)
  const [isMenuOpen, setMenu] = useState(false)

  const handleClick = () => {
    setModal(prevState => !prevState)
  }
  
  const handleMenu = () => {
    setMenu(prevState => !prevState)
  }

  return (
    <>
      <div className='app'>
        <div className='header'>
          <GiHamburgerMenu className='menu-btn' onClick={handleMenu}/>
          <h1>Example App</h1>
          <div className='nav'>
          </div>
        </div>
        <div className='body'>
          <button onClick={handleClick}>Open Modal</button>
        </div>
      </div>

      {isModalOpen && <Modal closeModal={setModal}/>}
      <Menu isMenuOpen={isMenuOpen}/>

      <ReactDimmer isOpen={isModalOpen} exitDimmer={setModal} zIndex={100} blur={1.5} />
      <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenu} zIndex={100} blur={1.5}/>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
