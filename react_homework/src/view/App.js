import React, { Component } from 'react';
import '../css/App.css';
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Content>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Content>
          <Footer/>
      </div>
    );
  }
}

export default App;
