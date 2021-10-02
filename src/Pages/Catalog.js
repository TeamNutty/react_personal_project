import React from "react";
import AppComponent from "../components/AppComponent";
import ContainerPage from "../components/ContainerPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mycatalog from "../components/Mycatalog";
import Mygame from "../components/Mygame";
import Title from "../components/Title";

function Catalog() {
    return (
        <div>
            <AppComponent>
                <Header />
                <ContainerPage>
                    <Title titleName="Catalog" />
                    <div className="Gamecontainer">
                        <Mycatalog name="Ghost Of Tsushima" />
                        <Mycatalog name="Ghost Of Tsushima" />
                        <Mycatalog name="Ghost Of Tsushima" />
                        <Mycatalog name="Ghost Of Tsushima" />
                        <Mycatalog name="Ghost Of Tsushima" />
                        <Mycatalog name="Ghost Of Tsushima" />
                        <Mycatalog name="Ghost Of Tsushima" />
                        <Mycatalog name="Ghost Of Tsushima" />
                    </div>
                </ContainerPage>
                <Footer />
            </AppComponent>
        </div>
    );
}

export default Catalog;
