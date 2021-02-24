import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Map from './components/Map/Map';
import Category from './components/Category/Category';


class App extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  render() {
    return (
      <div className="App">
        
        <NavBar/>
        <Map /> 
        
        
        <Switch>
          <Route exact path='/' render={() =>
            <div><h1> HomePage </h1></div>
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              
            />
          }/>

          <Route exact path='/login' render={() => 
            <LoginPage
                
            />
          }/>

        </Switch>

      


      </div>
    );
  }
}

export default App;
