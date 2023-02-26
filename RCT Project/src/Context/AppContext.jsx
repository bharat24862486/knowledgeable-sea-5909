import { createContext, useState } from "react";

export const AppContext = createContext()

function AppContextProvider({children}){
    const [doHover, setDoHover] = useState(false)
    const [doHover1, setDoHover1] = useState(false)
    const [isLogin, setLogin] = useState(false)
    return (
        <AppContext.Provider value={{doHover:doHover, setDoHover:setDoHover,doHover1:doHover1, setDoHover1:setDoHover1, isLogin:isLogin, setLogin:setLogin}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider