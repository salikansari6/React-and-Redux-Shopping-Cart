import React from 'react'
import './Product.css'
import {connect} from 'react-redux'
import {addToCart,decreaseFromCart} from '../actions'
import Button from '@material-ui/core/Button';


function Product({productName,price,imgURL,addToCart,decreaseFromCart,cart}) {
    
    var itemQty=cart.find(product=>product.productName===productName)
    return (
        <div className="product">
            <img className="product-image" src={imgURL} alt=""/>
            <h1>{productName}</h1>
            <h3>price: {price}</h3>
            <div className="button-container">
            <Button variant="contained" color="primary" onClick={()=> addToCart(productName,price,imgURL)}>+</Button>
            <Button  variant="contained" color="secondary" onClick={() => {
                try{
                    decreaseFromCart(productName,itemQty.quantity)
                }
                catch(err){
                    alert(`${productName} is not present in the cart`)
                }
            }}>-</Button>
            </div>
        </div>
    )
}



const mapDispatchToProps={addToCart,decreaseFromCart}

const mapStateToProps=(state)=>{
    return{
        cart:state.cartReducer.cart
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
