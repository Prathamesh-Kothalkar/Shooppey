import React, { useContext } from "react";



import 'react-toastify/dist/ReactToastify.css';
import "./ProductPage.css";
import arrow_png from "../Assets/breadcrum_arrow.png"
import dull_star_icon from "../Assets/star_dull_icon.png"
import star_icon from "../Assets/star_icon.png"
import Popular from "../Popular/Popular";
import { ShopContext } from "../../Context/ShopContext";
import { ToastContainer, toast } from 'react-toastify';


const ProductPage = (props)=>{
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
    return(
        <>
        <div className="product-page">
            Home <img src={arrow_png} alt="" /> Shop <img src={arrow_png} alt="" /> {product.category} <img src={arrow_png} alt="" /> {product.id}
        </div>
        <div className="product-details">
            <div className="product-left">
                <div className="product-imgs">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-img">
                <img src={product.image} alt=""/>
                </div>
            </div>
            <div className="product-right">
                <h1>{product.name}</h1>
                <div className="product-stars">
                   <img src={star_icon} alt="" />
                   <img src={star_icon} alt="" />
                   <img src={star_icon} alt="" />
                   <img src={star_icon} alt="" />
                   <img src={star_icon} alt="" />
                </div>
                <div className="price">
                    <div className="old-price">
                        ${product.old_price}
                    </div>
                    <div className="new-price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, explicabo!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, unde!
                </div>
                <div className="product-size">
                    <h3>Select Size</h3>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
                <button onClick={()=>{toast.success("Added to Cart");addToCart(product.id)}}>Add to Cart</button>
            </div>
           
        </div>
        <Popular/>  
        <ToastContainer
        position="top-center"
        autoClose={999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light" />
        </>
    )
}

export default ProductPage;