import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"

export const Locationlist = () => { 
    const {locations, getLocations} = useContext(LocationContext) //locations and get locations is coming from the return starting on line 25 of LocationProvider

    useEffect(() => {
        getLocations()
    }, []) // empty array is looking for a change of state

    return (
        <article className="location--Card">
            { 
                locations.map(location => {
                    return <section key={location.id} className="locations"> 
                        <div>Address: {location.address}</div> 
                        <div>Square Footage: {location.sqFootage}</div> 
                        <div>Handicap Accessible: {location.handicap}</div> 
                    </section>
                })
            }
        </article>
    )
}