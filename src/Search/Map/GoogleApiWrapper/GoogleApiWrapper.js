import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {

    // var name = this.props.businesses.map
    // (b => b.name)

    var singleLat = this.props.lat.map
    (latCoords => latCoords)

    var singleLong = this.props.long.map
    (longCoords => longCoords)

    var points = [
        { lat: singleLat[0], lng: singleLong[0] },
        { lat: singleLat[1], lng: singleLong[1] },
        { lat: singleLat[2], lng: singleLong[2] },
        { lat: singleLat[3], lng: singleLong[3] },
        { lat: singleLat[4], lng: singleLong[4] },
        { lat: singleLat[5], lng: singleLong[5] },
        { lat: singleLat[6], lng: singleLong[6] },
        { lat: singleLat[7], lng: singleLong[7] },
        { lat: singleLat[8], lng: singleLong[8] },
        { lat: singleLat[9], lng: singleLong[9] },
        { lat: singleLat[10], lng: singleLong[10] },
        { lat: singleLat[11], lng: singleLong[11] },
        { lat: singleLat[12], lng: singleLong[12] },
        { lat: singleLat[13], lng: singleLong[13] },
        { lat: singleLat[14], lng: singleLong[14] },
        { lat: singleLat[15], lng: singleLong[15] },
        { lat: singleLat[16], lng: singleLong[16] },
        { lat: singleLat[17], lng: singleLong[17] },
        { lat: singleLat[18], lng: singleLong[18] },
        { lat: singleLat[19], lng: singleLong[19] }
    ]

    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
    bounds.extend(points[i]);
}

const markers = this.props.businesses.map
(b => <Marker 
        name={b.name} 
        position={ { lat: b.coordinates.latitude, lng: b.coordinates.longitude }}
        />)

    return (
      <Map  google={this.props.google} 
            zoom={14}
            bounds={bounds}
            initialCenter={{
                lat: singleLat[0],
                lng: singleLong[0]
            }}
            >
                {markers}
        
        {/* <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[0]}
                position={points[0]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[1]}
                position={points[1]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[2]}
                position={points[2]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[3]}
                position={points[3]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[4]}
                position={points[4]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[5]}
                position={points[5]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[6]}
                position={points[6]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[7]}
                position={points[7]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[8]}
                position={points[8]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[9]}
                position={points[9]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[10]}
                position={points[10]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[11]}
                position={points[11]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[12]}
                position={points[12]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[13]}
                position={points[13]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[14]}
                position={points[14]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[15]}
                position={points[15]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[16]}
                position={points[16]}/>
        <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={name[17]}
                position={points[17]}/> */}
        
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer)




// var points = [
//     { lat: 42.02, lng: -77.01 },
//     { lat: 42.03, lng: -77.02 },
//     { lat: 41.03, lng: -77.04 },
//     { lat: 42.05, lng: -77.02 }
// ]

