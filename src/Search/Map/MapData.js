import React from 'react'
import GoogleApiWrapper from './GoogleApiWrapper/GoogleApiWrapper';

export function MapData(props) {

    const latArray = props.businesses.map
        (b => b.coordinates.latitude)

    const lat = latArray.map
        (l => l)

    const longArray = props.businesses.map
        (b => b.coordinates.longitude)

    const long = longArray.map
        (l => l)



    return(
        <div>
            <GoogleApiWrapper
            lat={lat}
            long={long}
            businesses={props.businesses}
            />
        </div>
    )
}
export default MapData