import React from "react";
import AppComponent from "../components/AppComponent";
import ContainerPage from "../components/ContainerPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

function AdminAddgames() {
    return (
        <div>
            <AppComponent>
                <Header />
                <form className="formUpdate">
                    <p>Game Picture</p>
                    <input type="file" />

                    <p>Game Cover</p>
                    <input type="file" />

                    <p>Name</p>
                    <input type="text" />

                    <p>Price</p>
                    <input type="number" />

                    <p>Discount</p>
                    <input type="number" placeholder="Persent" />

                    <p>Trailer Link</p>
                    <input type="text" />

                    <p>Discription</p>
                    <input type="text" />

                    <button className="submitbutton">Update</button>
                </form>
                <Footer />
            </AppComponent>
        </div>
    );
}

export default AdminAddgames;
