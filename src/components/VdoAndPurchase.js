import React from "react";
import Logo from "../picture/covers/logoghost.png";
import Commentbox from "./Commentbox";
import LikeSystem from "./LikeSystem";
import UserComment from "./UserComment";

function VdoAndPurchase() {
    return (
        <>
            <div className="gamePage">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/b_iU_gnn28U"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className="boxPagelogo">
                    <div className="gamePageLogo">
                        <img src={Logo} />
                    </div>
                    <p style={{ color: "orange", margin: "0" }}>PRICE</p>
                    <p style={{ paddingBottom: "40px  " }}>TBH 1200</p>
                    <button className="btn btn-primary btn-lg">PURCHASE</button>
                </div>
            </div>
            <div className="gamePageDiscription">
                <p>Ghost of Tsushima</p>
                <p>
                    Venture beyond the battlefield to experience feudal Japan like never before. In this open-world
                    action adventure, you’ll roam vast countrysides and expansive terrain to encounter rich characters,
                    discover ancient landmarks, and uncover the hidden beauty of Tsushima. Explore meticulously-crafted
                    regions showcasing diversity of life on the sprawling island—from billowing fields and tranquil
                    shrines to ancient forests, villages and stark mountainscapes. Find peace in the quiet moments of
                    natural harmony and solace in the moments you’ll share with the people you help along the way.
                </p>
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
