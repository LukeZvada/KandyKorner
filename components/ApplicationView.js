import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { LocationList } from "./location/LocationList"
import { ProductList } from "./products/ProductList"



export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <Route path="/products">
                     <ProductList />
                </Route>
            </ProductProvider>
        </>
    )
}