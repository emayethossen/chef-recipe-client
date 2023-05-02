import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/chefrecipe/:id",
                element: <PrivateRoute><ChefRecipe /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/chefs/${params.id}`)
            }
        ]
    },
]);


export default router;