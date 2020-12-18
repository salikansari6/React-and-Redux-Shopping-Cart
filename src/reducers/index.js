import {combineReducers} from 'redux'

const initialState={
    cart:[],
}


const cartReducer = (state=initialState,action) =>{
   if(action.type==="ADD_TO_CART")
   {    
        const isProductInCart=state.cart.some(({productName})=>productName===action.payload.productName)
        if(!isProductInCart)
        {
            return {...state,cart:[...state.cart,{...action.payload,quantity:1}]}
        }
        else
        {
            return {...state,cart:state.cart.map((product)=>{
                return product.productName===action.payload.productName ? {...product,quantity:product.quantity+1}: product 
            })}
        }
   }
   else if(action.type==="DECREASE_FROM_CART")
   {    
       if(action.payload.quantity===1)
       {
           return {...state,cart:state.cart.filter(product=>product.productName!==action.payload.productName)}
       }
       return {...state,cart:state.cart.map((product)=>{
           return product.productName===action.payload.productName ? {...product,quantity:product.quantity-1}: product 
       })}
   }
   else if(action.type==="REMOVE_FROM_CART")
   {
       return {...state,cart:state.cart.filter(product=>product.productName!==action.payload)}
   }
   
   return state

}


export default combineReducers({cartReducer})