import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import { useState } from 'react'

import React from 'react'

const Header = ({setId}) => {
    const [trackerName, setTrackerName] = useState("Wildfire")
    return (
        <div className="header">
            <h1 className={trackerName}> <Icon icon={locationIcon} /> {trackerName} Tracker (Powered By NASA) </h1>
            <form className="choice">
                <input type="radio" name="dhruv" value="wildfire" onClick={() => {
                    setTrackerName("Wildfire")
                    setId(8)
                }}/>
                <label for="fire">Wildfire</label>
                <input type="radio" name="dhruv" value="storm" onClick={() => {
                    setTrackerName("Storm")
                    setId(10)
                    }}/>
                <label for="storm">Storms</label>
            </form>
        </div>
    )
}

export default Header
