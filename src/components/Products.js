import React from 'react'
import Product from './Product'
import './Products.css'
import {productList} from '../productList'


function Products() {

    const renderProducts=productList.map(({productName,imgURL,price,quantity})=>{
        return(
            <Product key={productName} productName={productName} quantity={quantity} price={price} imgURL={imgURL}></Product>
        )
    })

    return (
        <div className="products">
            {renderProducts}
        </div>
    )
}

export default Products
