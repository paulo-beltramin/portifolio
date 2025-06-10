import { useContext, type ReactNode } from "react"
import { authContext } from "../Context"
import { Navigate } from "react-router"


type privateProps = {
    children: ReactNode
}

export const Private = ({ children }: privateProps) => {

    const { enabled } = useContext(authContext)

    if (!enabled) {

        return (
            <Navigate to={'/login'} />
        )
    }



    return (
        <div>

            {children}

        </div>
    )
}
