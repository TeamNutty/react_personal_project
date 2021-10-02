import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

function FormloginAndRegister() {
    const [toggleRegister, setToggleRegister] = useState(false);

    function handleToggleRegister() {
        setToggleRegister(cur => !cur);
    }

    return (
        <div className="backgroundRegister">
            {toggleRegister ? (
                <Register handleToggleRegister={handleToggleRegister} />
            ) : (
                <Login handleToggleRegister={handleToggleRegister} />
            )}
        </div>
    );
}

export default FormloginAndRegister;
