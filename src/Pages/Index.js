import React from "react";
import AppComponent from "../components/AppComponent";
import Header from "../components/Header";
import ContainerPage from "../components/ContainerPage";
import Title from "../components/Title";
import NewgamePremote from "../components/NewgamePremote";
import GamesalesIndex from "../components/GamesalesIndex";
import PosterCatalog from "../components/PosterCatalog";
import Footer from "../components/Footer";

function Index() {
    return (
        <div>
            <AppComponent>
                <Header />
                <ContainerPage>
                    <Title titleName="New and Trending" />
                    <NewgamePremote />
                    <Title titleName="Games On Sales" />
                    <GamesalesIndex />
                    <Title titleName="Piclygon Games Store Catalog" />
                    <PosterCatalog />
                </ContainerPage>
                <Footer />
            </AppComponent>
        </div>
    );
}

export default Index;
