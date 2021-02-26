import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import citiesAPI from './utils/allCitiesService'
import Cities from './components/Cities/Cities';
import Map from './components/Map/Map';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      cities: []
      
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

  /*--- Lifecycle Methods ---*/ 

  async componentDidMount() {
    const citiesList = await citiesAPI.getAllCities();
    this.setState( citiesList )
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">Explomo <NavBar 
          handleLogout = {this.handleLogout}
          user={this.state.user}
          
          />
        </header>

        {/* anything that is on everypage goes outside switch*/}
       
        <Switch>
          <Route exact path='/' render={() =>
            <div><h1> <Map /> 
            <Cities 
            cities = {this.state.cities}
            /></h1></div>
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
          <Route exact path='/recommendations' render={({ history }) => 
            <div>
            <div>Welcome to {this.props.location.city.name}</div>
            <div>
            { this.props.location.city.restaurants.map(function(r){
              return (
                <div className = "citiesCard">
                  <p>{r.name}</p>
                </div>
              
              )
            }) 
          }
          </div>
          </div>
          }/>
          

        </Switch>


      </div>
    );
  }
}

export default App;