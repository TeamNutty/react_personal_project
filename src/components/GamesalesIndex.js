import React from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "./contexts/authContext";
import GamesCart from "./GamesCart";

function GamesalesIndex() {
    const { allGame } = useContext(AuthContext);
    const discountGame = allGame.filter(item => Number(item.discount)).sort((a, b) => b.id - a.id);
    return (
        <div className="Gamecontainer">
            {discountGame.splice(0, 4).map(item => (
                <GamesCart
                    name={item.name}
                    gameCover={item.gameCover}
                    discount={Number(item.discount).toFixed(0)}
                    fullprice={Number(item.price).toFixed(0)}
                    discountPrice={item.price - Number(item.price * item.discount) / 100}
                    gameId={item.id}
                />
            ))}
        </div>
    );
}

export default GamesalesIndex;
