import React, { useContext } from "react";
import { LikesContext } from "../context/LikesContext";
import { UserContext } from "../context/UserContext";
import DataDisplay from "../components/SearchDisplay"

function LikesPage() {
    const { likes, add, remove } = useContext(LikesContext);
    const { loggedInUser } = useContext(UserContext);
    return (
        <div>
            <h1>likes for {loggedInUser}</h1>
            <div>
                {likes &&
                    likes.length > 0 &&
                    likes.map((data) => (
                        <DataDisplay
                            data={data}
                            key={data.data_id}
                            add={add}
                            remove={remove}
                            isLike={true}
                        />
                    ))}
                {likes.length === 0 && (
                    <h3>
                        No likes have been added yet. Have fun searching!
                    </h3>
                )}
            </div>
        </div>
    );
}

export default LikesPage;