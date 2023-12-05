import React,{Context, createContext, useState} from "react";
import all_product from "../Components/Assets/all_product"
import Item from "../Components/Item/Item";
import CartItems from "../Components/CartItems/CartItems";
export const ShopContext = createContext(null)

const getDefaulCart = ()=>{
    let cart ={}
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0
    }
    return cart;
}

const ShopContextProvider = (props)=>{

const [cartItem,setCartItem]=useState(getDefaulCart())


const addToCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
const getDefaultCount=()=>{
    let itemCount=0
    for(let item in cartItem)
    {
        if(cartItem[item]>0){
            itemCount+=cartItem[item]
        }
    }
    return itemCount;
}

const getTotalAmount = ()=>{
    let totalAmount = 0;
    for(let item in cartItem){
        if(cartItem[item]>0){
            let amount=all_product.find((e)=>e.id===Number(item));
            console.log(amount);
            totalAmount += amount.new_price*cartItem[item]
        }
    }
    return totalAmount;
}

const removeToCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

const contextValue={all_product,cartItem,addToCart,removeToCart,getDefaultCount,getTotalAmount}
    return(
        <>
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        </>
    )
}

export default ShopContextProvider;