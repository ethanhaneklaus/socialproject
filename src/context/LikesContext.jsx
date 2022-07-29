import React, { useState, useCallback, createContext } from "react";

export const LikesContext = createContext(null);

export function LikesProvider(props) {
    const [like, setLike] = useState([]);
    const [likes, setLikes] = useState([]);

    const add = useCallback(
        (data) => setLike((curr) => [...curr, data]),
        [setLike]
    );

    const remove = useCallback(
        (id) => {
            setLike((curr) => curr.filter((val) => val.data_id !== id));
        },
        [setLike]
    );

    return (
        <LikesContext.Provider value={{ like, likes, setLikes, add, remove, setLike, LikesContext }}>
            {props.children}
        </LikesContext.Provider>
    );
}

