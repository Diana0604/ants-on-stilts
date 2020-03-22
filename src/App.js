import React, {Component} from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
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
      <HashRouter basename = "/ants-on-stilts">
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/qrumpet" component={QrumpetPage}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
