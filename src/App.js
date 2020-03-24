//TODO -> props write everything consistently ({title, blabla}) instead of (props) and use {...props} where appropriate
import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
//pages
import HomePage from './pages/homepage/hompeage.component';
import QrumpetPage from './pages/qrumpetpage/qrumpetpage.component';
import SignIn from './pages/signinpage/signinpage.component';
//components
import Navbar from './components/navbar/navbar.component';

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
          <Navbar/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/qrumpet" component={QrumpetPage}/>
            <Route exact path="/login" component={SignIn}/>
          </Switch>
        </div>
    );
  }
}

export default App;
