import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 38.9072,
            lng: -77.0369
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'API_KEY'
})(MapContainer)