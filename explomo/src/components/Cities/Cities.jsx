import React from 'react';

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
    let cityUI = this.props.cities.map(function(city){
      return (
        <h6>{city.name}</h6>
      )
    }) 
    return (
      <div className='cities'>
      {cityUI}
    </div>
    )
  }
}

export default Cities;