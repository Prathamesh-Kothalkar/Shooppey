import React,{useContext} from "react";
import {ShopContext} from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css"
const ShopCategory = (props) =>{
    const {all_product}=useContext(ShopContext);
    return(
        <>
           <div className="banner">
            <img className="banner-image" src={props.banner} alt="" />
            </div> 
            <div className="items">
                <div className="category-item">
                {all_product.map((item,i)=>{
                    if(props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null
                    }
                })}
                </div>
            </div>
        </>
    )
}

export default ShopCategory;