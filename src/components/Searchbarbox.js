import React, { useContext } from "react";
import { useHistory } from "react-router";

function Searchbarbox({ fineGame, search, setSearch }) {
    const history = useHistory();

    const handleClicktoSearch = gameid => {
        history.push(`/gamepage/${gameid}`);
        setSearch("");
    };

    return (
        <div className="searchbarbox">
            {search && fineGame.map(item => <p onClick={() => handleClicktoSearch(item.id)}>{item.name}</p>)}
        </div>
    );
}

export default Searchbarbox;
