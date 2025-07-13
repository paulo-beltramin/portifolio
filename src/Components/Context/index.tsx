
import { createContext, useState, useEffect, type ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../dist/services/db'

type authProps = {
    enabled: boolean
}

type userProps = {
    email: string | null
}

type authProvider = {
    children: ReactNode
}


export const authContext = createContext({} as authProps)


export const AuthProvider = ({ children }: authProvider) => {

    const [user, setUser] = useState<userProps>()

    useEffect(() => {

        const unSub = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser({
                    email: user.email
                })
            }
        })

        return () => {
            unSub()
        }

    }, [])



    return (
        <authContext.Provider value={{
            enabled: !!user
        }}>
            {children}
        </authContext.Provider>
    )
}
