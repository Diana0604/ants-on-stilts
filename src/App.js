import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
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
    
  }

  render () {
    return (
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/qrumpet" component={QrumpetPage}/>
          </Switch>
        </div>
    );
  }
}

export default App;
