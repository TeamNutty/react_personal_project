import React from "react";

function UserComment({ profile, name, comment }) {
    return (
        <div className="userprofile">
            <div>
                {profile ? <img src={profile} /> : <i class="bi bi-person-circle" style={{ fontSize: "4rem" }}></i>}
                <p>{name}</p>
            </div>
            <div className="usercomment">
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default UserComment;
