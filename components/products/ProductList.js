import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"

export const ProductList = () => { 
    const {products, getProducts, productTypes, getProductTypes} = useContext(ProductContext)

    useEffect(() => { 
        getProducts()
    }, [])

    useEffect(() => { 
        getProductTypes()
    }, [])

    return ( 
        <article className="products--Card"> 
        {
            products.map(product => {
                const productType = productTypes.find(productType => (productType.id === product.productTypeId)) || {}
                return <section key={product.id} className="products">
                    <div> Name: {product.name} </div>
                    <div> Price: ${product.price} </div>
                    <div> Type: {productType.type} </div>
                </section>
            })
        }
        </article>
    )
}