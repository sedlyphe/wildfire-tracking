import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'


const Map = ({ eventData, markerId, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const coordi = []
    eventData.forEach(event => {
        const points = event.geometries.map(geometry => {
            return {
                id: event.id,
                title: event.title,
                lat: geometry.coordinates[1],
                lng: geometry.coordinates[0] 
            }
        })
        coordi.push(...points)
    })
    const markers = coordi.map( ({id, title, lat, lng}) => {
        return <LocationMarker 
            id={markerId}
            lat={lat} 
            lng={lng}
            onClick={ () => setLocationInfo({id, title})}
        />
    })
    
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys = {{key: 'AIzaSyBQLDVtXOdCBYVDQmggmsGjtS-3ZDdxCn4'}} 
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center :{
        lat: 20.5937,
        lng: 78.9629
    }, 
    zoom: 4
}

export default Map
