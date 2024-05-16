// CheckAuth.js
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAuth } from './authProvider';

const CheckAuth = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
            <Skeleton count={5} width="100%" height="100%" />
        </div>
    );
};

export default CheckAuth;
