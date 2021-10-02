import React from "react";
import gameCover from "./../picture/covers/Ghost_of_Tsushima.jpg";

function GamesCart({ name }) {
    return (
        <div className="cardgame">
            <img src={gameCover}></img>
            <h5>{name}</h5>
            <div className="cardgameDetail">
                <p className="cardgameDiscount">-10%</p>
                <p className="cardgameRealprice">TBH 1800</p>
                <p>TBH 1260</p>
            </div>
        </div>
    );
}

export default GamesCart;
