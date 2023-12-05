import React, { useContext, useState } from "react"
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"
import LoadingBar from 'react-top-loading-bar'

const Navbar=()=>{
    const {getDefaultCount} = useContext(ShopContext);
   console.log(getDefaultCount());
    const [menu,setMenu]=useState("shop");
    const [progress, setProgress] = useState(0)
    return(
        <>
         <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

          <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo"/>
                <p>Shoppeey</p>
            </div>
            <ul className="nav-menu">
                <li onClick={ ()=>{ setMenu("shop");setProgress(100)} }><Link to="/" style={{textDecoration:'none'}} > Shop </Link>{menu==="shop"?<hr/>:<></>} </li>
                <li onClick={ ()=>{ setMenu("men");setProgress(100)}  }> <Link to="/mens"  style={{textDecoration:'none'}} > Men </Link>{menu==="men"?<hr/>:<></>} </li>
                <li onClick={ ()=>{  setMenu("women");setProgress(100)} }> <Link to="/womens"  style={{textDecoration:'none'}} > Women </Link>{menu==="women"?<hr/>:<></>} </li>
                <li onClick={ ()=> { setMenu("kid");setProgress(100)}}><Link to="/kids"  style={{textDecoration:'none'}} >  Kids </Link>{menu==="kid"?<hr/>:<></>} </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button onClick={()=>{setMenu("")}}>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" onClick={()=>{setMenu("")}} /></Link>
                <div className="nav-cart-count">
                    {getDefaultCount()}
                </div>
            </div>
          </div>
        </>
    )
}

export default Navbar;