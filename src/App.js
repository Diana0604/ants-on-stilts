import React, {Component} from 'react';
import {Route} from 'react-router-dom';
//import logo from './logo.png';
import './App.css';

import HomePage from './pages/homepage/hompeage.component';

const QrumpetPage = () => (
  <div>
    <h1>QRUMPET PAGE</h1>
  </div>
)

class App extends Component {
  render () {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/qrumpet" component={QrumpetPage}/>
      </div>
    );
  }
}

export default App;
