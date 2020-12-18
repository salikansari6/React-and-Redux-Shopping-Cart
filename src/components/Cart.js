import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import CartItem from './CartItem'
import './Cart.css'
import './Bill.css'
import Bill from './Bill'

function Cart() {

    const cart=useSelector((state)=>state.cartReducer.cart)

    const [displayTotalPrice,setDisplayTotalPrice] = useState(0)

    useEffect(()=>{
        let totalPrice=0
        cart.forEach(product=>{
            totalPrice+=product.quantity*product.price
        })
        setDisplayTotalPrice(totalPrice)
    },[cart])
    

    if(cart.length===0)
    {
        return(
            <h1>Cart is empty!</h1> 
        )
    }



    return (
        <>
        <div className="cart">
            {cart.map(product=>{
                return(
                    <CartItem {...product}></CartItem>
                )
            })}
        </div>
            <div className="bill">
            <Bill displayTotalPrice={displayTotalPrice}></Bill>
            </div>
        </>
    )
}

export default Cart
