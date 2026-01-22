import React, { createContext } from 'react'

export const ContextCreater = createContext();


function Name({children}) {
    const user = "krishna";

    return(
        <ContextCreater.Provider value={user}>
{children}
        </ContextCreater.Provider>
    )
    
}
export default Name;