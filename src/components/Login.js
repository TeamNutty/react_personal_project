import axios from "../config/axios";
import jwtDecode from "jwt-decode";
import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { setToken } from "../services/localStorage";
import logo from "./../picture/icon/logologin.png";
import { AuthContext } from "./contexts/authContext";
import validator from "validator";

function Login() {
    // state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // validate state
    const [validateEmail, setValidateEmail] = useState("");
    const [validatePassword, setValidatePassword] = useState("");

    const history = useHistory();
    const { user, setUser } = useContext(AuthContext);

    // function
    const handleLoginform = async e => {
        try {
            if (email.trim() === "") {
                setValidateEmail("Email is required");
            } else {
                setValidateEmail("");
                if (!validator.isEmail(email)) {
                    setValidateEmail("Email is wrong");
                } else {
                    setValidateEmail("");
                }
            }
            if (password.trim() === "") {
                setValidatePassword("Password is required");
            } else {
                if (password.length < 6) {
                    setValidatePassword("Password must more than 6 length");
                } else {
                    setValidatePassword("");
                }
            }

            e.preventDefault();
            const res = await axios.post("/login", {
                email,
                password,
            });
            setToken(res.data.token);
            setUser(jwtDecode(res.data.token));
            history.push("/");
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className="formlogin" onSubmit={handleLoginform}>
            <div className="divlogo">
                <img src={logo} alt="logo" />
            </div>
            <p>Email Address</p>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <p className="validate">{validateEmail}</p>

            <p>Password</p>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <p className="validate">{validatePassword}</p>

            <button className="submitbutton">LOG IN NOW</button>
            <NavLink to="/register">
                <p>register</p>
            </NavLink>
        </form>
    );
}

export default Login;
