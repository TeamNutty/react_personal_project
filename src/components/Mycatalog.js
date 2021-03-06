import React from "react";
import gameCover from "./../picture/covers/Ghost_of_Tsushima.jpg";

function Mycatalog({ name }) {
    return (
        <div className="cardgame">
            <img src={gameCover}></img>
            <h5>{name}</h5>
            <div className="MygameDetail">
                <p className="mygamecatalog">TBH 1200</p>
                <div className="btn-group">
                    <button className="btn btn-warning">EDIT</button>
                    <button className="btn btn-danger">DELETE</button>
                </div>
            </div>
        </div>
    );
}

export default Mycatalog;
