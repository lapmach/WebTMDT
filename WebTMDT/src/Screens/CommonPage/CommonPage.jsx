import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const CommonPage = () => {
    const location = useLocation();
    console.log(location);
    
    useEffect(() => {
        if (location.pathname === "/") {
            <Navigate to="/home" replace></Navigate>
        }
    }, [location.pathname])
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}

export default CommonPage
