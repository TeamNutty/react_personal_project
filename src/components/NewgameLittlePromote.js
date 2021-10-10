import React from "react";
import { NavLink } from "react-router-dom";

function NewgameLittlePromote({ name, gameCover }) {
    return (
        <div className="NewgameLittlePromote ">
            <div className="imagebox">
                <img src={gameCover}></img>
            </div>
            <p>{name}</p>
        </div>
    );
}

export default NewgameLittlePromote;
