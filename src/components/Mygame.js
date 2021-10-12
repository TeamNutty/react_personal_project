import React from "react";

function Mygame({ name, gameCover }) {
    return (
        <div className="cardgame">
            <img src={gameCover}></img>
            <h5>{name}</h5>
            <button className="btn btn-outline-warning">PLAY</button>
        </div>
    );
}

export default Mygame;
