import React, { useContext } from "react";
import {ShopContext} from "../../Context/ShopContext"
import remove_icon from "../Assets/cart_cross_icon.png"
import "./CartItem.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const CartItems = () =>{
    const {all_product,cartItem,removeToCart,getTotalAmount}=useContext(ShopContext)
    return(
        <>
           <div className="cartitems">
                <div className="main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr/>
               {all_product.map((e)=>{
                if(cartItem[e.id]>0){
                    return  <div className="format">
                    <img src={e.image} alt="" className="carticon-product-icon" />
                    <p>{e.name}</p>
                    <p className="item-x">{e.new_price}</p>
                    <button className="cart-item-quantity">{cartItem[e.id]}</button>
                    <p className="item-x">{e.new_price*cartItem[e.id]}</p>
                    <img src={remove_icon} height={"3px"} width={"3px"} onClick={()=>{toast.success("Deleted");{removeToCart(e.id)}}} alt="" className="remove-icon"/>
                </div>
                }
               
               })}
                <hr/>
            </div>
            <div className="cart-bill">
                <div className="cart-total">
                    <h2>Payment Details</h2>
                    <div className="payment-details">
                    <p>Amount <span className="amount">$ {getTotalAmount()}</span></p>
                    <p>Shipping<span>Free</span></p>
                    <hr />
                    <p>Total Bill  <span className="amount"> $ {getTotalAmount()}</span></p>
                    
                    <button onclick="()=>{toast.warning("Login First..!");}">Procced To Buy</button>
                    </div>
                </div>
                <div className="promo">
                        Thank you for Shopping With us...!
                </div>
            </div>
            <ToastContainer
        position="top-right"
        autoClose={999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light" /> 
        </>
    )
}

export default CartItems;
