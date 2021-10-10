import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import newgameCover from "./../picture/covers/ghost of tsushima coverbig.jpg";
import NewgameLittlePromote from "./NewgameLittlePromote";
import { AuthContext } from "../components/contexts/authContext";

function NewgamePremote() {
    const { allGame } = useContext(AuthContext);
    const newAllgamesort = [...allGame].sort((a, b) => {
        return b.id - a.id;
    });
    console.log(newAllgamesort);
    return (
        <div className="NewgamePremote">
            <NavLink to="/gamepage">
                <div className="divpicNewgame">
                    <img src={newgameCover}></img>
                </div>
            </NavLink>
            <div className="sidegamebar">
                {newAllgamesort.splice(0, 4).map(item => (
                    <NewgameLittlePromote
                        name={item.name}
                        gameCover={item.gameCover}
                        className=""
                        NewgameLittlePromoteActive
                    />
                ))}
            </div>
        </div>
    );
}

export default NewgamePremote;
