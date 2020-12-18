
export const addToCart = (productName,price,imgURL) =>{
    return{
        type:'ADD_TO_CART',
        payload:{
            productName: productName,
            price:price,
            imgURL:imgURL
        }
    }
}


export const decreaseFromCart = (productName,quantity) =>{
    return{
        type:"DECREASE_FROM_CART",
        payload:
        {
            productName:productName,
            quantity:quantity
        }
    }
}

export const removeFromCart = (name) =>{
    return{
        type:"REMOVE_FROM_CART",
        payload:name
    }
}