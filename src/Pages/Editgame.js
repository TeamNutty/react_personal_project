import axios from "../config/axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import AppComponent from "../components/AppComponent";
import { AuthContext } from "../components/contexts/authContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Editgame() {
    //state
    const [oneGame, setOneGame] = useState({});
    const [gamepicture, setGamepicture] = useState(null);
    const [gamecover, setGamecover] = useState(null);
    const [gamelogo, setGamelogo] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState(0);
    const [trailerLink, setTrailerLink] = useState("");
    const [discription, setDiscription] = useState("");
    const { setRefresh } = useContext(AuthContext);
    const params = useParams();
    const history = useHistory();

    // preview state
    const [pregamepicture, setPregamepicture] = useState(null);
    const [pregamecover, setPregamecover] = useState(null);
    const [pregameLogo, setPregameLogo] = useState(null);

    // useEffect
    useEffect(() => {
        const fetchOnegame = async () => {
            const oneGame = await axios.get(`/getOnegame/${params.gameId}`);
            setOneGame(oneGame.data.oneGame);
            setName(oneGame.data.oneGame.name);
            setPrice(oneGame.data.oneGame.price);
            setDiscount(oneGame.data.oneGame.discount);
            setTrailerLink(oneGame.data.oneGame.trailerLink);
            setDiscription(oneGame.data.oneGame.discription);
        };
        fetchOnegame();
    }, []);

    //function
    const handleChangegamepicture = e => {
        setGamepicture(e.target.files[0]);
        setPregamepicture(URL.createObjectURL(e.target.files[0]));
    };

    const handleChangegamecover = e => {
        setGamecover(e.target.files[0]);
        setPregamecover(URL.createObjectURL(e.target.files[0]));
    };

    const handleChangegamelogo = e => {
        setGamelogo(e.target.files[0]);
        setPregameLogo(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmitEditgame = async e => {
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
            const res = await axios.put(`/catalog/${params.gameId}`, formData);
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
                <form className="formUpdate" onSubmit={handleSubmitEditgame}>
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

                    <button className="submitbutton">Confirm Editing</button>
                </form>
                <Footer />
            </AppComponent>
        </div>
    );
}

export default Editgame;
