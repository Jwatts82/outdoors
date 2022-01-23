import React, { Component } from 'react';
import Park from '../../components/Park/Park';

const My_Key = process.env.REACT_APP_NPS_API_KEY;

class Parks extends Component {
  state = {
    parks: []
  }

  componentDidMount() {
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${My_Key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        this.setState({
          parks: data.data
        });
      });
  }

  render() {
    const parks = this.state.parks.map((park, i) => <Park 
    key={i} 
    park={park.fullName}
    img={park.images[0].url} />)

    return ( 
    <div> 
      {parks} 
    </div>
    )
}

}

export default Parks
