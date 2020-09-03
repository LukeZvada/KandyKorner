import React, { useState } from "react"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => { 
    const [products, setProducts] = useState([])
    const [productTypes, setProductTypes] = useState([])

    const getProducts = () => { 
        return fetch("http://localhost:8088/products")
        .then(res => res.json())
        .then(setProducts)
    }

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProductTypes)
    }


    const addProducts = (products) => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(products)
        })
            .then(getProducts)
    }

    return ( 
        <ProductContext.Provider value={{
            products, getProducts, addProducts, productTypes, getProductTypes
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}
