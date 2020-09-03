import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import { Locationlist } from "./location/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import "./KandyKorner.css"


export const KandyKorner = () => ( 
    <>
        <h2>KandyKorner</h2>
        {/* <small>React Project</small> */}

        <h2>Locations</h2>
        <article className="location--container">
            <LocationProvider> 
                <Locationlist />
            </LocationProvider>
        </article>

        <h2>Products</h2>
        <aritcle className="product--container"> 
            <ProductProvider>
                <ProductList />
            </ProductProvider>
        </aritcle>



    </>
)