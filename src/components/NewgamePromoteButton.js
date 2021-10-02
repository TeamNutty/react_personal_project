import React from "react";
import gamelogo from "../picture/covers/logoghost.png";

function NewgamePromoteButton() {
    return (
        <div className="buttonPromote">
            <div className="logogame">
                <img src={gamelogo} alt="" />
            </div>
            <p>In war-torn Tsushima, ancient beauty endures</p>
        </div>
    );
}

export default NewgamePromoteButton;
