import { useContext } from "react";
import { NavLink } from "react-router-dom";
import gameCover from "./../picture/covers/Ghost_of_Tsushima.jpg";
import { AuthContext } from "./contexts/authContext";

function GamesCart({ name, gameCover, discount, fullprice, discountPrice, gameId }) {
    const { handleClickGamepage, oneGame } = useContext(AuthContext);

    return (
        <NavLink to="/gamepage" className="navlink" onClick={() => handleClickGamepage(gameId)}>
            <div className="cardgame">
                <img src={gameCover}></img>
                <h5>{name}</h5>
                <div className="cardgameDetail">
                    <p className="cardgameDiscount">-{discount}%</p>
                    <p className="cardgameRealprice">TBH {fullprice}</p>
                    <p>TBH {discountPrice}</p>
                </div>
                <div className="btn-group ">
                    <button className="btn btn-warning">EDIT</button>
                    <button className="btn btn-danger">DELETE</button>
                </div>
            </div>
        </NavLink>
    );
}

export default GamesCart;
