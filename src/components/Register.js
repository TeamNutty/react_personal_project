import axios from "../config/axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./../picture/icon/logologin.png";
import validator from "validator";

function Register() {
    // state
    const [profilePicture, setProfilePicture] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // validate state
    const [validateFirstname, setValidateFirstname] = useState("");
    const [validateLastname, setvalidateLastname] = useState("");
    const [validateEmail, setValidateEmail] = useState("");
    const [validatePassword, setValidatePassword] = useState("");
    const [validateConfirmPassword, setValidateConfirmPassword] = useState("");

    // history
    const history = useHistory();

    // function
    const handleSubmitRegister = async e => {
        try {
            e.preventDefault();

            if (firstName.trim() === "") {
                setValidateFirstname("Firstname is required");
            } else {
                setValidateFirstname("");
            }
            if (lastName.trim() === "") {
                setvalidateLastname("Lastname is required");
            } else {
                setvalidateLastname("");
            }
            if (!validator.isEmail(email)) {
                setValidateEmail("plz use email form");
            } else {
                setValidateEmail("");
            }
            if (password.trim() === "") {
                setValidatePassword("Password is required");
            } else {
                setValidatePassword("");
            }
            if (password !== confirmPassword) {
                setValidateConfirmPassword("Password is wrong");
            } else {
                setValidateConfirmPassword("");
            }

            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("confirmPassword", confirmPassword);
            formData.append("profilePicture", profilePicture);

            const res = await axios.post("/register", formData);
            console.log(res.data);

            history.push({
                pathname: "/login",
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handleChangeProfilePicture = e => {
        console.log(e.target.files);
        setProfilePicture(e.target.files[0]);
    };

    return (
        <form className="formlogin" onSubmit={handleSubmitRegister}>
            <div className="divlogo">
                <img src={logo} alt="logo" />
            </div>
            <p>Profile Picture</p>
            <input type="file" onChange={handleChangeProfilePicture} />

            <p>First Name</p>
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <p className="validate">{validateFirstname}</p>

            <p>Last Name</p>
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            <p className="validate">{validateLastname}</p>

            <p>Email</p>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <p className="validate">{validateEmail}</p>

            <p>Password</p>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <p className="validate">{validatePassword}</p>

            <p>Confirm Password</p>
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <p className="validate">{validateConfirmPassword}</p>

            <button className="submitbutton">REGISTER</button>
        </form>
    );
}

export default Register;
