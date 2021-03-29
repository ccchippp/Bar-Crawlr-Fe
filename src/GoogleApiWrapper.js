import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
  position: 'relative',  
  width: '600px',
  height: '600px'
}

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={containerStyle}
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
  apiKey: 'AIzaSyCeI787lI4KYtUR_hYgEg_LP_lR8bUAf38'
})(MapContainer)