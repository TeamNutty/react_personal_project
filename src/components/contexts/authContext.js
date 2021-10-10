import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { user as initialUser } from "../../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(initialUser);
    const [allGame, setAllGame] = useState([]);
    const [oneGame, setOneGame] = useState({});

    useEffect(() => {
        const getAllgames = async () => {
            const allGameCatalog = await axios.get("http://localhost:9999/getallgame");
            setAllGame(allGameCatalog.data.game);
            // console.log(allGame);
        };
        getAllgames();
    }, []);

    const handleClickGamepage = gameId => {
        const oneGame = allGame.filter(item => item.id === gameId);
        setOneGame(oneGame);
        console.log(oneGame);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, allGame, handleClickGamepage, oneGame }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };
