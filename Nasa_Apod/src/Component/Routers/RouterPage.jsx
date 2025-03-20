import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Nasa from "../Nasa";
import PageNotFound from "../Pages/PageNotFound";

// Lazy-loaded components
const SignUp = lazy(() => import("../Pages/SignUp"));
const SignIn = lazy(() => import("../Pages/SignIn"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const MarsRover = lazy(() => import("../MarsRovers/MarsRover"));
const Gallery = lazy(() => import("../Pages/Gallery"));
const Apod = lazy(() => import("../Pages/Apod"));
const About = lazy(() => import("../Pages/About"));

// Loading fallback
const Loading = () => <div className="h-[90vh]  text-center text-lg font-bold mt-10">Loading...</div>;

export let nasaRouter = createBrowserRouter([
    {
        path: "/",
        element: <Nasa />,
        children: [
            {
                path: "contactus",
                element: (
                    <Suspense fallback={<Loading />}>
                        <ContactUs />
                    </Suspense>
                )
            },
            {
                path: "signup",
                element: (
                    <Suspense fallback={<Loading />}>
                        <SignUp />
                    </Suspense>
                )
            },
            {
                path: "signin",
                element: (
                    <Suspense fallback={<Loading />}>
                        <SignIn />
                    </Suspense>
                )
            },
            {
                path: "marsrover",
                element: (
                    <Suspense fallback={<Loading />}>
                        <MarsRover />
                    </Suspense>
                )
            },
            {
                path: "gallery",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Gallery />
                    </Suspense>
                )
            },
            {
                path: "apod",
                element: (
                    <Apod/>
                )
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<Loading />}>
                        <About />
                    </Suspense>
                )
            }
        ]
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
]);
