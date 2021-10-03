import React from "react";
import logo from "./../picture/icon/logologin.png";

function Register({ handleToggleRegister }) {
    return (
        <form className="formlogin">
            <div className="divlogo">
                <img src={logo} alt="logo" />
            </div>
            <p>Profile Picture</p>
            <input type="file" />

            <p>First Name</p>
            <input type="text" />

            <p>Last Name</p>
            <input type="text" />

            <p>Email</p>
            <input type="text" />

            <p>Password</p>
            <input type="password" />

            <p>Confirm Password</p>
            <input type="password" />

            <button className="submitbutton">REGISTER</button>
        </form>
    );
}

export default Register;
