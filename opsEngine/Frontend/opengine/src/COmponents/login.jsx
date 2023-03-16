import React from "react";
import { Link } from "react-router-dom";
// import SignUp from "./signup";
const LoginForm=()=>{
    return(
        <div className="form">
            <h3>Login</h3>
            <div className="div">
            <input placeholder="User Name/Email Id" type='email'/>
            </div>
            <div className="div">
            <input type='password' placeholder="Password"/>
            </div>
            <button>Login</button>
            <div>
             <Link to='/SignUp'><h3>SignUp Here</h3></Link>   
            </div>

        </div>
    )
}
export default LoginForm;