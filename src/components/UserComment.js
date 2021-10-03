import React from "react";
import profile from "../picture/covers/me.jpg";

function UserComment() {
    return (
        <div className="userprofile">
            <div>
                <img src={profile} />
                <p>Nuttadol</p>
            </div>
            <div className="usercomment">Verry Good Game</div>
        </div>
    );
}

export default UserComment;
