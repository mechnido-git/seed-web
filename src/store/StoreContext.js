import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/config";

export const  StoreContext = createContext(null);

const Store = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(()=>{console.log(user);}, [user])

    return(

    <StoreContext.Provider value={{userId, setUserId, userName, setUserName, user, setUser}}>
        {children}
    </StoreContext.Provider>
    )
        
}

export default Store