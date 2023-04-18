import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/config";

export const  StoreContext = createContext(null);

const Store = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [auth, setAuth] = useState(null);

    useEffect(()=>{
        setAuth(getAuth(app))
    }, [])

    return(

    <StoreContext.Provider value={{userId, setUserId, userName, setUserName, auth, setAuth}}>
        {children}
    </StoreContext.Provider>
    )
        
}

export default Store