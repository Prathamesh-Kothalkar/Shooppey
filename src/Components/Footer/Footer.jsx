import React from "react";
import { useState } from "react";
import "./Footer.css"
import logo_png from "../Assets/logo.png"
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const Foot = ()=>{
    const [progress, setProgress] = useState(0);
    return(
        <>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <div className="container">
            <div className="logo">
                <img src={logo_png} alt="" />
                <p>Shoppeey</p>
            </div>
            <div className="address">
                <ul>
                    <li>Address</li>
                    <li>Walsawangi,</li>
                    <li> Jalna, Maharastra</li>
                    <li>Pin : 431132.</li>
                    <li>Ph :+0235648/+02356874</li>
                </ul>
            </div>
            <div className="links">
                <ul>
                    <li>Categories</li>
                    <li onClick={()=>setProgress(100)}><Link to="/" style={{textDecoration:'none',color:'white'}} > Home </Link></li>
                    <li onClick={()=>setProgress(100)}> <Link to="/mens"  style={{textDecoration:'none',color:'white'}} > Men </Link></li>
                    <li onClick={()=>setProgress(100)}> <Link to="/womens"  style={{textDecoration:'none',color:'white'}} > Women </Link></li>
                    <li onClick={()=>setProgress(100)}> <Link to="/kids"  style={{textDecoration:'none',color:'white'}} > Kid </Link></li>
                    
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <li>Social Links</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
          
        </div>
        <div className="copyright">
            Copyright 2023<a href="https://www.instagram.com/kothalkar_prathamesh_07/"> @Prathamesh-Kothalkar. </a> All Rights Reserved
        </div>
        
        </>
    )
}

export default Foot;