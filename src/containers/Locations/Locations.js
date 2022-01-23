import React, { Component } from 'react';
import Location from '../../components/Location/Location';

const My_Key = process.env.REACT_APP_NPS_API_KEY;

class Locations extends Component {
  state = {
    locations: []
  }

  componentDidMount() {
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${My_Key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        this.setState({
          locations: data.data
        });
      });
  }

  render() {
    const locations = this.state.locations.map((location, i) => 
      <Location key={i} location={location.state} />)

    return ( 
    <div> 
      {locations} 
    </div>
    )
}

}

export default Locations
