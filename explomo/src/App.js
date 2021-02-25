import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

//anything that needs to do with setState needs to be defined in here
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
        <header className="App-header">Explomo</header>
        {/* anything that is on everypage goes outside switch*/}
        <NavBar 
          handleLogout = {this.handleLogout}
          user={this.state.user}
          
        />

        <Switch>
          <Route exact path='/' render={() =>
            <div><h1> HomePage </h1></div>
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
