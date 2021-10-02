import React from "react";
import gameCover from "./../picture/covers/Ghost_of_Tsushima.jpg";

function Mycatalog({ name }) {
    return (
        <div className="cardgame">
            <img src={gameCover}></img>
            <h5>{name}</h5>
            <div className="MygameDetail">
                <p className="mygamecatalog">TBH 1200</p>
            </div>
        </div>
    );
}

export default Mycatalog;
