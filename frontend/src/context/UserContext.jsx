import { createContext, useState } from "react";

export const UserContext=createContext();

export const UserProvider=({children})=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    const login=()=>setIsAuthenticated(true);

    return (
        <UserContext.Provider value={{isAuthenticated,login}}>
            {children}
        </UserContext.Provider>
    );
};