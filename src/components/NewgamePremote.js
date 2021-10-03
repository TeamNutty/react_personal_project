import React from "react";
import { NavLink } from "react-router-dom";
import newgameCover from "./../picture/covers/ghost of tsushima coverbig.jpg";
import NewgameLittlePromote from "./NewgameLittlePromote";

function NewgamePremote() {
    return (
        <div className="NewgamePremote">
            <NavLink to="/gamepage">
                <div className="divpicNewgame">
                    <img src={newgameCover}></img>
                </div>
            </NavLink>
            <div className="sidegamebar">
                <NewgameLittlePromote name="Ghost" className="" NewgameLittlePromoteActive />
                <NewgameLittlePromote name="Ghost" />
                <NewgameLittlePromote name="Ghost" />
                <NewgameLittlePromote name="Ghost" />
            </div>
        </div>
    );
}

export default NewgamePremote;
