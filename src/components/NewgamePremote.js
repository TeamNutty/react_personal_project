import React from "react";
import newgameCover from "./../picture/covers/ghost of tsushima coverbig.jpg";
import NewgameLittlePromote from "./NewgameLittlePromote";
import NewgamePromoteButton from "./NewgamePromoteButton";

function NewgamePremote() {
    return (
        <div className="NewgamePremote">
            <img src={newgameCover}></img>
            <NewgamePromoteButton />
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
