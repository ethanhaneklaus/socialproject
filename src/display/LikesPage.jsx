import React, { useContext } from "react";
import { LikesContext } from "../context/LikesContext";
import { UserContext } from "../context/UserContext";

function LikesPage() {
    const { Likes, add, remove } = useContext(LikesContext);
    const { loggedInUser } = useContext(UserContext);
    return (
        <div>
            <h1>Likes for {loggedInUser}</h1>
            <div>
                {Likes &&
                    Likes.length > 0 &&
                    Likes.map((data) => (
                        <DataDisplay
                            data={data}
                            key={g.data_id}
                            add={add}
                            remove={remove}
                            isLikes={true}
                        />
                    ))}
                {Likes.length === 0 && (
                    <h3>
                        No likes have been added yet. Have fun searching!
                    </h3>
                )}
            </div>
        </div>
    );
}

export default LikesPage;