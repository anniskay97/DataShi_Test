// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Header from './header'
import MainPart from'./mainPart'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <MainPart/>
        <Footer/>
      </div>
    );
  }
}

export default App;
