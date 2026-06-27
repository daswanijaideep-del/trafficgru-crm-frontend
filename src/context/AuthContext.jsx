import { createContext, useContext, useMemo, useState } from "react";

import {
    saveAuth,
    getUser,
    clearAuth
} from "../services/authStorage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(getUser);

    const login = (userData, token) => {

        saveAuth(userData, token);

        setUser(userData);

    };

    const logout = () => {

        clearAuth();

        setUser(null);

    };

    const value = useMemo(() => ({
        user,
        login,
        logout
    }), [user]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);