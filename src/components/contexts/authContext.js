import axios from "../../config/axios";
import { createContext, useEffect, useState } from "react";
import { user as initialUser } from "../../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    // state
    const [user, setUser] = useState(initialUser);
    const [allGame, setAllGame] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const getAllgames = async () => {
            const allGameCatalog = await axios.get("/getallgame");
            setAllGame(allGameCatalog.data.game);
        };
        getAllgames();
    }, [refresh]);

    return (
        <AuthContext.Provider value={{ user, setUser, allGame, setAllGame, setRefresh, refresh }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };
