import React, { useEffect, useState } from "react";
import Commentbox from "./Commentbox";
import LikeSystem from "./LikeSystem";
import UserComment from "./UserComment";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
import { useParams, useHistory } from "react-router-dom";
import axios from "../config/axios";
import Title from "./Title";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "./contexts/authContext";
import Swal from "sweetalert2";

function VdoAndPurchase() {
    const [oneGame, setOneGame] = useState({});
    const [price, setPrice] = useState("");
    const [gameId, setGameId] = useState("");
    const [userId, setUserId] = useState("");
    const params = useParams();
    const history = useHistory();
    const { user, setRefresh } = useContext(AuthContext);

    useEffect(() => {
        const fetchOnegame = async () => {
            const resOnegame = await axios.get(`/getOnegame/${params.gameId}`);
            setOneGame(resOnegame);
            setPrice(resOnegame?.data?.oneGame?.price);
            setGameId(params?.gameId);
            setUserId(user?.id);
        };
        fetchOnegame();
    }, []);

    const handleClickBuygame = async () => {
        try {
            if (!user) {
                history.push("/login");
            } else {
                Swal.fire({
                    title: `You want to purchase ${oneGame?.data?.oneGame?.name}`,
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Confirm Purchase",
                }).then(result => {
                    if (result.isConfirmed) {
                        Swal.fire("Purchase!", `${oneGame?.data?.oneGame?.name} already in Library`, "success");
                        const newgame = axios.post("/buygame", { price, gameId, userId });
                        setRefresh(cur => !cur);
                        history.push("/library");
                    }
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Title titleName={oneGame?.data?.oneGame?.name} />
            <div className="gamePage">
                {ReactHtmlParser(oneGame?.data?.oneGame?.trailerLink)}
                <div className="boxPagelogo">
                    <div className="gamePageLogo">
                        <img src={oneGame?.data?.oneGame?.gameLogo} />
                    </div>
                    <p style={{ color: "orange", margin: "0" }}>PRICE</p>
                    <p style={{ paddingBottom: "40px  " }}>
                        TBH{" "}
                        {oneGame?.data?.oneGame?.price -
                            (oneGame?.data?.oneGame?.price / 100) * oneGame?.data?.oneGame?.discount}
                    </p>
                    <button className="btn btn-primary btn-lg" onClick={handleClickBuygame}>
                        PURCHASE
                    </button>
                </div>
            </div>
            <div className="gamePageDiscription">
                <p>{oneGame?.data?.oneGame?.name}</p>
                <p>{oneGame?.data?.oneGame?.discription}</p>
            </div>
            <div class="input-group commentbox">
                <input type="text" class="form-control" placeholder="Comment" />
                <button className="btn btn-primary">Submit</button>
            </div>

            <UserComment />
            <UserComment />
            <UserComment />
        </>
    );
}

export default VdoAndPurchase;
