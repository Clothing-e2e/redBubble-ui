'use client';
import { useState, createContext } from "react";

export const GlobalContext = createContext({});

export default function Context({ children }) {
    const [data, setData] = useState({});
    return (
        <GlobalContext.Provider value={{ data, setData }}>
            {children}
        </GlobalContext.Provider>
    )
}