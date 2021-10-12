import axios from "../config/axios";
import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./contexts/authContext";

function GamesCart({ name, gameCover, discount, fullprice, discountPrice, gameId }) {
    const { allGame, setAllGame, user } = useContext(AuthContext);
    const history = useHistory();

    // function
    const handleClickdelGame = () => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then(result => {
                if (result.isConfirmed) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    const newallgame = [...allGame];
                    const idx = allGame.findIndex(item => item.id === gameId);
                    newallgame.splice(idx, 1);
                    setAllGame(newallgame);
                    axios.delete(`/catalog/${gameId}`);
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="cardgame">
            <div onClick={() => history.push(`/gamepage/${gameId}`)}>
                <img src={gameCover}></img>
                <h5>{name}</h5>
                <div className={`${Number(discount) === 0 ? "cardgameNosale" : "cardgameDetail"}`}>
                    {Number(discount) === 0 || <p className="cardgameDiscount">-{discount}%</p>}
                    {Number(discount) === 0 || <p className="cardgameRealprice">TBH {fullprice}</p>}
                    <p>TBH {discountPrice}</p>
                </div>
            </div>
            {user?.isAdmin && (
                <div className="btn-group ">
                    <button className="btn btn-warning" onClick={() => history.push(`/editgame/${gameId}`)}>
                        EDIT
                    </button>
                    <button className="btn btn-danger" onClick={handleClickdelGame}>
                        DELETE
                    </button>
                </div>
            )}
        </div>
    );
}

export default GamesCart;
