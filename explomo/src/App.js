import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Map from './components/Map/Map';
import Category from './components/Category/Category';
import userService from './utils/userService';
import Cities from './components/Cities/Cities';

class App extends Component {
  constructor() {
    super();
    this.state = {
     user:userService.getUser()
  
    };
  }
  handleLogout = ()=> {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }
  
    
  render() {
    return (
        <div className="App">
          <header className="App-header">Explomo  <NavBar 
            handleLogout = {this.handleLogout}
          /></header>
          
          {/* anything that is on everypage goes outside switch*/}
         
          <Switch>
            <Route exact path='/' render={() =>
              <div><h1> <Map /><Cities /> </h1></div>
            }/>
            
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
           
          </Switch>
        </div>
      );
    }
  }

export default App;
