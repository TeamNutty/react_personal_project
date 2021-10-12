import React, { useContext } from "react";
import AppComponent from "../components/AppComponent";
import ContainerPage from "../components/ContainerPage";
import { AuthContext } from "../components/contexts/authContext";
import Footer from "../components/Footer";
import GamesCart from "../components/GamesCart";
import Header from "../components/Header";
import Title from "../components/Title";

function Catalog() {
    const { allGame } = useContext(AuthContext);
    const newSortgame = [...allGame].sort((a, b) => b.id - a.id);

    return (
        <div>
            <AppComponent>
                <Header />
                <ContainerPage>
                    <Title titleName="Catalog" />
                    <div className="Gamecontainer">
                        {newSortgame.map(item => (
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
                </ContainerPage>
                <Footer />
            </AppComponent>
        </div>
    );
}

export default Catalog;
