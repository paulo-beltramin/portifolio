import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { Layout } from "../Components/Layout";
import { Projects } from "../pages/Projects";
import { Admin } from "../pages/Admin";
import { Login } from "../pages/Login";


const routes = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/projetos',
                element: <Projects />
            },

            {
                path: '/admin',
                element: <Admin />
            },

            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export { routes }