import React, { useState } from "react"

export const LocationContext = React.createContext()

export const LocationProvider = (props) => { //props short for porperties. part for react library 
    const [locations, setLocations] = useState([])

    const getLocations = () => { 
        return fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation
        }}>
            {props.children} 
        </LocationContext.Provider>
    )
    //props is targeting the child component 
}