import React from "react";
import { Link } from "react-router-dom";
import "./Singup.css"
const Signup = () => {
    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <form>
                        <h1 className="xx">Create an Account</h1>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <a className="button a" href="#">Sign Up</a>
                        <p className="x"><input className="check" type="checkbox" />Remember me<a className="forget" href="#">Forgot account?</a></p>
                        <h5 className="xx">Already have account?<Link to="/login">Login now</Link></h5>
                    </form>
                </div>
            </div>

        </>
    )
}

export default  Signup;