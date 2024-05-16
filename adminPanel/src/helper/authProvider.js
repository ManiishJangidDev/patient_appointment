// authContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const userToken = await localStorage.getItem('token');
                setIsLoggedIn(!!userToken); // Set isLoggedIn based on the presence of userToken
            } catch (err) {
                console.log('Error in checkAuth', err);
            }
        };

        checkAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
