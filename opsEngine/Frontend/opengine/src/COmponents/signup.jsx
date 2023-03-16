import React from "react";
const SignUp=()=>{
    return(
        <div className="signup">
            <h3>Registartion</h3>
            <div className="div">
            <input placeholder="User Name" type='text'/>
            </div>
            <div className="div">
            <input placeholder="Email Id" type='email'/>
            </div>
            <div className="div">
            <input type='password' placeholder="Password"/>
            </div>
            <div className="div">
            <input type='password' placeholder="Cnnfirm-Password"/>
            </div>
            <div className="div">
            <input type='number' placeholder="Mobile Number"/>
            </div>
            <button>Sign Up</button>
        </div>
    )
}
export default SignUp;