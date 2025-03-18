import React, { lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from '../Component/Loader'
// Lazy-loaded components
const Navbar = lazy(() => import('./Pages/Navbar'));
const HeroSection = lazy(() => import('./Pages/HeroSection'));
const HomeSection2 = lazy(() => import('./Pages/HomeSection2'));
const HomeSection3 = lazy(() => import('./Pages/HomeSection3'));
const Footer = lazy(() => import('./Pages/Footer'));

// const Loader = () => <div className="text-center text-xl">Loading...</div>;

const Nasa = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<Loader />}>
            <Navbar />
            {location.pathname === '/' && (
                <>
                    <Suspense fallback={<Loader />}><HeroSection /></Suspense>
                    <Suspense fallback={<Loader />}><HomeSection2 /></Suspense>
                    <Suspense fallback={<Loader />}><HomeSection3 /></Suspense>
                </>
            )}
            <Outlet />
            <Footer />
        </Suspense>
    );
};

export default Nasa;
