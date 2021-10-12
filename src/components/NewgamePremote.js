import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../components/contexts/authContext";
import Slider from "react-slick";

function NewgamePremote() {
    const { allGame } = useContext(AuthContext);
    const history = useHistory();

    const newAllgamesort = [...allGame]
        .sort((a, b) => {
            return b.id - a.id;
        })
        .splice(0, 6);
    console.log(newAllgamesort);

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div>
            <Slider {...settings}>
                {newAllgamesort.map(item => (
                    <div className="boxcaruzel" onClick={() => history.push(`/gamepage/${item.id}`)}>
                        <img src={item?.gamePoster} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default NewgamePremote;
