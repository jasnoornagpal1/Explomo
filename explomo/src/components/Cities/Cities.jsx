import React from 'react';
import './Cities';
import { Link } from 'react-router-dom';

class Cities extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    this.setState ({cities: this.props.cities})
  }

  render () {
    let newRec = {
      pathname: "/recommendations"
    }
    let displayCities = this.props.cities.map(function(city){
      return (
        <div className = "citiesCard">
          <p>{city.name}</p>
          <p>{city.location}</p>
            <div className = "citiesImg">
              <img src={city.image}/>
              <Link to={{pathname: "/recommendations", city: city}}>Recommendations!</Link>
            </div>
        </div>
      )
    }) 
    return (
      <div className='cities'>
      {displayCities}
      </div>
    )
  }
}

export default Cities;