import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='tweet'>
        <header className='tweet__header'>
          <h3 className='tweet__title'>Compose new Tweet</h3>
        </header>
        <section className='tweet__content'>
          <textarea className='tweet__box' placeholder='What’s happening?'></textarea>
          <button class='tweet__button'>Tweet</button>
        </section>
      </div>
    );
  }
}

export default App;
