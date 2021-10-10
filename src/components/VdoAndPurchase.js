import React, { useContext } from "react";
import Logo from "../picture/covers/logoghost.png";
import Commentbox from "./Commentbox";
import { AuthContext } from "./contexts/authContext";
import LikeSystem from "./LikeSystem";
import UserComment from "./UserComment";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";

function VdoAndPurchase() {
    const { oneGame } = useContext(AuthContext);
    // console.log(typeof oneGame[0]?.trailerLink);
    return (
        <>
            <div className="gamePage">
                {ReactHtmlParser(oneGame[0]?.trailerLink)}
                <div className="boxPagelogo">
                    <div className="gamePageLogo">
                        <img src={oneGame[0]?.gameLogo} />
                    </div>
                    <p style={{ color: "orange", margin: "0" }}>PRICE</p>
                    <p style={{ paddingBottom: "40px  " }}>TBH 1200</p>
                    <button className="btn btn-primary btn-lg">PURCHASE</button>
                </div>
            </div>
            <div className="gamePageDiscription">
                <p>{oneGame[0]?.name}</p>
                <p>{oneGame[0]?.discription}</p>
            </div>
            <LikeSystem />
            <Commentbox />
            <UserComment />
            <UserComment />
            <UserComment />
        </>
    );
}

export default VdoAndPurchase;
