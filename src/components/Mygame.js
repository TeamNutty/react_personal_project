import React from "react";
import gameCover from "./../picture/covers/Ghost_of_Tsushima.jpg";

function Mygame({ name }) {
    return (
        <div className="cardgame">
            <img src={gameCover}></img>
            <h5>{name}</h5>
            <button className="btn btn-outline-warning">PLAY</button>
        </div>
    );
}

export default Mygame;
