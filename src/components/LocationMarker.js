import {Icon} from '@iconify/react'
import stormIcon from '@iconify/icons-mdi/weather-lightning'
import fireIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ id, lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            
            <Icon icon={(id===10)?stormIcon:fireIcon} className={(id===10)?"stormIcon":"fireIcon"}/>
        </div>
    ) 
}

export default LocationMarker
