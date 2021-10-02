import React from "react";
import { NavLink } from "react-router-dom";
import poster from "./../picture/files/games_streaming.jpg";

function PosterCatalog() {
    return (
        <NavLink to="/catalog">
            <div className="PosterCatalog">
                <img src={poster}></img>
                <div className="discription">
                    <h3>Explore our catalog for your next favorite game!</h3>
                </div>
            </div>
        </NavLink>
    );
}

export default PosterCatalog;
