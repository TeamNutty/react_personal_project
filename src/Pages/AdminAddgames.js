import axios from "../config/axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react/cjs/react.development";
import AppComponent from "../components/AppComponent";
import { AuthContext } from "../components/contexts/authContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

function AdminAddgames() {
    //state
    const [gamepicture, setGamepicture] = useState(null);
    const [gamecover, setGamecover] = useState(null);
    const [gamelogo, setGamelogo] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState(0);
    const [trailerLink, setTrailerLink] = useState("");
    const [discription, setDiscription] = useState("");
    // preview state
    const [pregamepicture, setPregamepicture] = useState(null);
    const [pregamecover, setPregamecover] = useState(null);
    const [pregameLogo, setPregameLogo] = useState(null);

    const history = useHistory();

    const { setRefresh } = useContext(AuthContext);
    //function
    const handleChangegamepicture = e => {
        setGamepicture(e.target.files[0]);
        setPregamepicture(URL?.createObjectURL(e.target.files[0]));
    };

    const handleChangegamecover = e => {
        setGamecover(e.target.files[0]);
        setPregamecover(URL.createObjectURL(e.target.files[0]));
    };

    const handleChangegamelogo = e => {
        setGamelogo(e.target.files[0]);
        setPregameLogo(URL?.createObjectURL(e.target.files[0]));
    };

    const handleSubmitaddgame = async e => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("gamePicture", gamepicture);
            formData.append("gamePicture", gamecover);
            formData.append("gamePicture", gamelogo);
            formData.append("name", name);
            formData.append("price", price);
            formData.append("discount", discount);
            formData.append("trailerLink", trailerLink);
            formData.append("discription", discription);
            const res = await axios.post("/admin", formData);
            setRefresh(cur => !cur);
            history.push("/catalog");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <AppComponent>
                <Header />
                <form className="formUpdate" onSubmit={handleSubmitaddgame}>
                    <p>Game Picture</p>
                    {pregamepicture && (
                        <div className="showpic">
                            <img src={pregamepicture} />
                        </div>
                    )}
                    <input type="file" onChange={handleChangegamepicture} />

                    <p>Game Cover</p>
                    {pregamecover && (
                        <div className="showpic">
                            <img src={pregamecover} />
                        </div>
                    )}
                    <input type="file" onChange={handleChangegamecover} />

                    <p>Game logo</p>
                    {pregameLogo && (
                        <div className="showpic">
                            <img src={pregameLogo} />
                        </div>
                    )}
                    <input type="file" onChange={handleChangegamelogo} multiple />

                    <p>Name</p>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />

                    <p>Price</p>
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} />

                    <p>Discount</p>
                    <input
                        type="number"
                        placeholder="Persent"
                        value={discount}
                        onChange={e => setDiscount(e.target.value)}
                    />

                    <p>Trailer Link</p>
                    <input type="text" value={trailerLink} onChange={e => setTrailerLink(e.target.value)} />

                    <p>Discription</p>
                    <textarea
                        style={{ marginBottom: "30px", border: "2px solid #4b4b4b" }}
                        type="text"
                        value={discription}
                        onChange={e => setDiscription(e.target.value)}
                    />

                    <button className="submitbutton">Update</button>
                </form>
                <Footer />
            </AppComponent>
        </div>
    );
}

export default AdminAddgames;
