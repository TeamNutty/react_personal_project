import React from "react";
import { NavLink } from "react-router-dom";
import gameCover from "./../picture/covers/Ghost_of_Tsushima.jpg";

function NewgameLittlePromote({ name }) {
    return (
        <div className="NewgameLittlePromote ">
            <img src={gameCover}></img>
            <p>{name}</p>
        </div>
    );
}

export default NewgameLittlePromote;
