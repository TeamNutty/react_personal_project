import React from "react";
import logo from "./../picture/icon/logologin.png";

function Login({ handleToggleRegister }) {
    return (
        <form className="formlogin">
            <div className="divlogo">
                <img src={logo} alt="logo" />
            </div>
            <p>Email Address</p>
            <input type="text" />

            <p>Password</p>
            <input type="password" />

            <button className="submitbutton">LOG IN NOW</button>
            <p onClick={handleToggleRegister}>register</p>
        </form>
    );
}

export default Login;
