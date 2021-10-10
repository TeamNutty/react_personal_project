import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import logo from "./../picture/icon/logologin.png";
import profile from "../picture/covers/me.jpg";
import { AuthContext } from "./contexts/authContext";
import { removeToken } from "../services/localStorage";
import Swal from "sweetalert2";

function Header({ classname }) {
    // state
    const { user, setUser } = useContext(AuthContext);
    const history = useHistory();

    // function
    const handleclickLogout = e => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout",
        }).then(result => {
            if (result.isConfirmed) {
                Swal.fire("Success!", "logout successful", "success");
                removeToken();
                setUser(null);
                history.push("/");
            }
        });
    };

    return (
        <div className="header">
            <div className="header-left">
                <NavLink to="/home">
                    <img src={logo} alt="" className="weblogo" />
                </NavLink>
                <ol className="navbarlist">
                    <NavLink to="/" className="navitem" activeClassName="navbarborder" exact>
                        <li>STORE</li>
                    </NavLink>
                    {user && (
                        <NavLink to="/library" className="navitem" activeClassName="navbarborder">
                            <li>LIBRARY</li>
                        </NavLink>
                    )}

                    <NavLink to="/catalog" className="navitem" activeClassName="navbarborder">
                        <li>CATALOG</li>
                    </NavLink>
                    <NavLink to="/contact" className="navitem" activeClassName="navbarborder">
                        <li>CONTACT</li>
                    </NavLink>
                    {user?.isAdmin && (
                        <NavLink to="/admin" className="navitem" activeClassName="navbarborder">
                            <li>ADMIN</li>
                        </NavLink>
                    )}
                </ol>
            </div>

            <div className="header-right">
                <i class="bi bi-search"></i>
                <input type="search" placeholder="Search" />
                {user?.profilePicture ? (
                    <div className="profile">
                        <img src={user.profilePicture} />
                    </div>
                ) : (
                    <i class="bi bi-person-circle"></i>
                )}
                {user ? (
                    <p onClick={handleclickLogout}>SIGN OUT</p>
                ) : (
                    <NavLink to="/login" className="login">
                        <p>SIGN IN</p>
                    </NavLink>
                )}
            </div>
        </div>
    );
}

export default Header;
