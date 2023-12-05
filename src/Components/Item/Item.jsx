import React from "react";
import "./Item.css"
import {Link} from "react-router-dom"

const Item = (props)=>{
    return(
        <>
        <div className="item">
            <div className="img">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <h3>{props.name}</h3>
            </div>
            <div className="item-price">
                <div className="new-price">
                    $ {props.new_price}
                </div>
                <div className="old-price">
                    $ {props.old_price}
                </div>
            </div>
        </div>
        </>
    )
}

export default Item;