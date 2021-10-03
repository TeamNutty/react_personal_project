import React from "react";

function LikeSystem() {
    return (
        <div className="likeSystem">
            <div>
                <p>User Reviews</p>
            </div>
            <div className="likeanddislike">
                <div className="like">
                    <i class="fas fa-thumbs-up"></i>
                    <p>1200</p>
                </div>

                <div className="dislike">
                    <i class="fas fa-thumbs-down"></i>
                    <p>340</p>
                </div>
            </div>
        </div>
    );
}

export default LikeSystem;
