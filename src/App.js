import React, {Component} from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
//import logo from './logo.png';
import './App.css';
//pages
import HomePage from './pages/homepage/hompeage.component';
import QrumpetPage from './pages/qrumpetpage/qrumpetpage.component';

class App extends Component {
  constructor (){
    super();

    this.state = {
      page : 'homepage'
    };
  }

  clickQrumpetHandleClick = e => {
    this.setState({page: 'qrumpet'});
    window.scrollTo(0, 0);
  }



  render () {
    return (
      <HashRouter basename = "/ants-on-stilts">
        <div>
          <Switch>
            <Route exact path="/" render={() => <HomePage handleClick={this.clickQrumpetHandleClick}></HomePage>} />
            <Route exact path="/qrumpet" component={QrumpetPage} onClick={this.clickQrumpetHandleClick}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
