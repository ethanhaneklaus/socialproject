import React, { createContext } from "react";

export const UserContext = createContext(null);

export function UserProvider(props) {

    return (
        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>
    );
}