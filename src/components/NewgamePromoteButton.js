import React from "react";
import { NavLink } from "react-router-dom";
import gamelogo from "../picture/covers/logoghost.png";

function NewgamePromoteButton() {
    return (
        <div className="buttonPromote">
            <div className="logogame">
                <img src={gamelogo} alt="" />
            </div>
            <p>In war-torn Tsushima, ancient beauty endures</p>
            <button className="btn btn-primary btn-lg">GET NOW</button>
        </div>
    );
}

export default NewgamePromoteButton;
