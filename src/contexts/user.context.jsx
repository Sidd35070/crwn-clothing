import { createContext, useEffect, useState } from "react"; 
import { onAuthStateChangedListener, createUserFromAuth } from "../utils/firebase/firebase.util";


export const UserContext = createContext({
    currentUser : null,
    setCurrentUser: () =>{}
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect (() => {
        onAuthStateChangedListener((user) => {
            setCurrentUser(user);
            if(user) createUserFromAuth(user);
        })
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
