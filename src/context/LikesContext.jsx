import React, { useState, useCallback, createContext } from "react";

export const LikesContext = createContext(null);

export function LikesProvider(props) {
    const [Likes, setLikes] = useState([]);

    const add = useCallback(
        (data) => setLikes((curr) => [...curr, data]),
        [setLikes]
    );

    const remove = useCallback(
        (id) => {
            setLikes((curr) => curr.filter((val) => val.data_id !== id));
        },
        [setLikes]
    );

    return (
        <LikesContext.Provider value={{ Likes, add, remove }}>
            {props.children}
        </LikesContext.Provider>
    );
}