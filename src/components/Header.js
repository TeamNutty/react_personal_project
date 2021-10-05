import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../picture/icon/logologin.png";
import profile from "../picture/covers/me.jpg";

function Header({ classname }) {
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
                    <NavLink to="/library" className="navitem" activeClassName="navbarborder">
                        <li>LIBRARY</li>
                    </NavLink>
                    <NavLink to="/catalog" className="navitem" activeClassName="navbarborder">
                        <li>CATALOG</li>
                    </NavLink>
                    <NavLink to="/contact" className="navitem" activeClassName="navbarborder">
                        <li>CONTACT</li>
                    </NavLink>
                    <NavLink to="/admin" className="navitem" activeClassName="navbarborder">
                        <li>ADMIN</li>
                    </NavLink>
                </ol>
            </div>

            <div className="header-right">
                <i class="bi bi-search"></i>
                <input type="search" placeholder="Search" />
                <NavLink to="/login" className="login">
                    {/* <i class="bi bi-person-circle"></i> */}
                    <div className="profile">
                        <img src={profile} />
                    </div>
                </NavLink>
                <NavLink to="/login" className="login">
                    {/* <p>SIGN IN</p> */}
                    <p>SIGN OUT</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
