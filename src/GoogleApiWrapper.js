import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


const containerStyle = {
  position: 'relative',  
  width: '600px',
  height: '600px'
}

export class MapContainer extends Component {
  
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

  render() {
    return (
      <Map
        google={this.props.google}
        // onReady={this.fetchPlaces}
        zoom={14}
        style={containerStyle}
        initialCenter={{
            lat: 38.9072,
            lng: -77.0369
          }}
        // center={{
        //   lat: 40.854885,
        //   lng: -88.081807
        // }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'El Centro'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCeI787lI4KYtUR_hYgEg_LP_lR8bUAf38'
})(MapContainer)