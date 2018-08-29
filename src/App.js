import React, { Component } from 'react';
import Contact from './components/Contact'
import Header from './components/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact name='Juancho' email='cho@gmail.com' phone='123-456-789' />
        <Contact name='Fabiana' email='ana@gmail.com' phone='789-456-123' />
      </div>
    );
  }
}

export default App;
