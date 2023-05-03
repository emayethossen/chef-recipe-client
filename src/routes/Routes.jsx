import React, { lazy, Suspense } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
// import Blog from "../components/Blog/Blog";
// import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

const Blog = lazy(() => wait(1000).then(() => import("../components/Blog/Blog")))
const Login = lazy(() => wait(1000).then(() => import("../components/Login/Login")))

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
                element: <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center">
                    <button type="button" className="flex items-center rounded-lg bg-sky-500 px-4 py-2 text-white" disabled>
                        <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="font-medium"> Processing... </span>
                    </button>
                </div>}><Blog /></Suspense>,
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
                element: <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center">
                <button type="button" className="flex items-center rounded-lg bg-sky-500 px-4 py-2 text-white" disabled>
                    <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="font-medium"> Processing... </span>
                </button>
            </div>}><Login /></Suspense>,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/chefrecipe/:id",
                element: <PrivateRoute><ChefRecipe /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-emayethossen.vercel.app/chefs/${params.id}`)
            }
        ]
    },
]);

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}


export default router;