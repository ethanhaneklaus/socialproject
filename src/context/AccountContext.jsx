import React, { createContext } from "react";

export const AccountContext = createContext(null);

export function AccountProvider(props) {



    <AccountContext.Provider value={{}}>
        {props.children}
    </AccountContext.Provider>

}