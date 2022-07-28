import React, { createContext } from "react";

export const AccountContext = createContext(null);

export function AccountProvider(props) {

    return (
        <AccountContext.Provider value={{}}>
            {props.children}
        </AccountContext.Provider>
    );
}