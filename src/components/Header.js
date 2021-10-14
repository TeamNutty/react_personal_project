import React, { useContext, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import logo from "./../picture/icon/logologin.png";
import { AuthContext } from "./contexts/authContext";
import { removeToken } from "../services/localStorage";
import Swal from "sweetalert2";
import Searchbarbox from "./Searchbarbox";
import { useEffect } from "react/cjs/react.development";
import axios from "../config/axios";

function Header({ classname }) {
    // state
    const [search, setSearch] = useState("");
    const [allgame, setAllgame] = useState([]);
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
            background: "#1f1f1f",
            customClass: {
                title: "changeColortext",
                htmlContainer: "changeColortext",
            },
        }).then(result => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Success!",
                    text: "logout successful",
                    icon: "success",
                    background: "#1f1f1f",
                    customClass: {
                        title: "changeColortext",
                        htmlContainer: "changeColortext",
                    },
                });
                removeToken();
                setUser(null);
                history.push("/");
            }
        });
    };

    useEffect(() => {
        const fetchAllgame = async () => {
            const allGamefetch = await axios.get("/getallgame");
            setAllgame(allGamefetch.data.game);
        };
        fetchAllgame();
    }, []);

    const fineGame = [...allgame].filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

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
                <input type="search" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
                {user?.profilePicture ? (
                    <div className="profile">
                        <img src={user.profilePicture} />
                    </div>
                ) : (
                    <i class="bi bi-person-circle"></i>
                )}
                {user ? (
                    <p onClick={handleclickLogout} className="signoutbutton">
                        SIGN OUT
                    </p>
                ) : (
                    <NavLink to="/login" className="login">
                        <p>SIGN IN</p>
                    </NavLink>
                )}
                <Searchbarbox fineGame={fineGame} search={search} setSearch={setSearch} />
            </div>
        </div>
    );
}

export default Header;
