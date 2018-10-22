import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import HeroImage from './HeroImage';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navigation />
      	<HeroImage />
      </div>
    );
  }
}

export default App;
