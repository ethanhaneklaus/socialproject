import React, { createContext } from "react";

export const SettingsContext = createContext(null);

export function SettingsProvider(props) {

    return (
        <SettingsContext.Provider value={{}}>
            {props.children}
        </SettingsContext.Provider>
    );
}