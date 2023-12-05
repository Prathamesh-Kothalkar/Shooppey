import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <form>
                        <h1 className="xx">Login Page</h1>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <a className="button a" href="#">Login</a>
                        <p className="x"><input className="check" type="checkbox" />Remember me<a className="forget" href="#">Forgot account?</a></p>
                        <h5 className="xx">create account?<Link to="/signup">Create</Link></h5>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;