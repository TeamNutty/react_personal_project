import axios from "../config/axios";
import React, { useEffect, useState } from "react";
import AppComponent from "../components/AppComponent";
import ContainerPage from "../components/ContainerPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mygame from "../components/Mygame";
import Title from "../components/Title";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../components/contexts/authContext";

function Library() {
    const [ownGame, setOwnGame] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getlibrary = async () => {
            const gamelibrery = await axios.get("/getToshowlibrary");
            setOwnGame(gamelibrery.data.gameLibrary);
        };
        getlibrary();
    }, []);

    const mylibrary = [...ownGame].filter(item => item.User.id === user?.id);
    console.log(mylibrary);
    return (
        <div>
            <AppComponent>
                <Header />
                <ContainerPage>
                    <Title titleName="My Libraly" />
                    <div className="Gamecontainer">
                        {mylibrary.map(item => (
                            <Mygame name={item.Game.name} gameCover={item.Game.gameCover} />
                        ))}
                    </div>
                </ContainerPage>
                <Footer />
            </AppComponent>
        </div>
    );
}

export default Library;
