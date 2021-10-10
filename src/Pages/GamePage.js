import React, { useContext } from "react";
import AppComponent from "../components/AppComponent";
import ContainerPage from "../components/ContainerPage";
import { AuthContext } from "../components/contexts/authContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import VdoAndPurchase from "../components/VdoAndPurchase";

function GamePage() {
    const { oneGame } = useContext(AuthContext);

    return (
        <AppComponent>
            <Header />
            <ContainerPage>
                <Title titleName={oneGame[0]?.name} />
                <VdoAndPurchase />
            </ContainerPage>
            <Footer />
        </AppComponent>
    );
}

export default GamePage;
