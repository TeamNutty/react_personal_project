import React from "react";
import AppComponent from "../components/AppComponent";
import ContainerPage from "../components/ContainerPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import profile from "../picture/covers/me.jpg";

function Contact() {
    return (
        <AppComponent>
            <Header />

            <div className="profileContact">
                <img src={profile} />
                <div>
                    <p>Piclygons Developer</p>
                    <p>Nuttadol Harnpakdeepatima</p>
                    <p>Email : nattadol@smash@gmail.com</p>
                    <p>Line Id : teamdga</p>
                    <p>Tel : 083-005-7993</p>
                </div>
            </div>

            <Footer />
        </AppComponent>
    );
}

export default Contact;
