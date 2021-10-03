import React from "react";
import AppComponent from "../components/AppComponent";
import ContainerPage from "../components/ContainerPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import VdoAndPurchase from "../components/VdoAndPurchase";

function GamePage() {
    return (
        <AppComponent>
            <Header />
            <ContainerPage>
                <Title titleName="Ghost of Tsushima" />
                <VdoAndPurchase />
            </ContainerPage>
            <Footer />
        </AppComponent>
    );
}

export default GamePage;
