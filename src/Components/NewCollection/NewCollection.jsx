import React from "react";
import new_collections from "../Assets/new_collections"
import Item from "../Item/Item";
const NewCollect = ()=>{
    return(
        <>
        <div className="popular">
        <h1>New Collections</h1>
        </div>
          
          <div className="items">
           <div className="popular-item">
                {new_collections.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
           </div>
           </div>
        </>
    )
}

export default NewCollect;