import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import { Locationlist } from "./location/LocationList"


export const KandyKorner = () => ( 
    <>
        <h2>KandyKorner</h2>
        <small>React Project</small>

        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider> 
                <Locationlist />
            </LocationProvider>
        </article>



    </>
)