import React from "react";
import AppComponent from "../components/AppComponent";
import ContainerPage from "../components/ContainerPage";
import Footer from "../components/Footer";
import GamesCart from "../components/GamesCart";
import Header from "../components/Header";
import Mygame from "../components/Mygame";
import Title from "../components/Title";

function Library() {
    return (
        <div>
            <AppComponent>
                <Header />
                <ContainerPage>
                    <Title titleName="My Libraly" />
                    <div className="Gamecontainer">
                        <Mygame name="Ghost Of Tsushima" />
                        <Mygame name="Ghost Of Tsushima" />
                        <Mygame name="Ghost Of Tsushima" />
                        <Mygame name="Ghost Of Tsushima" />
                        <Mygame name="Ghost Of Tsushima" />
                        <Mygame name="Ghost Of Tsushima" />
                        <Mygame name="Ghost Of Tsushima" />
                        <Mygame name="Ghost Of Tsushima" />
                    </div>
                </ContainerPage>
                <Footer />
            </AppComponent>
        </div>
    );
}

export default Library;
