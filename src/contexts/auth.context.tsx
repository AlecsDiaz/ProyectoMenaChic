import { createContext, useState, FC } from "react";
import { ComponentAttributes } from '../interfaces/index'
import { AuthStatus, AuthStatusType } from '../interfaces/auth.interface'

export const AuthContext = createContext<AuthStatusType | null>(null);


export const AuthProvider: FC<ComponentAttributes> = ({ children }) => {
    const Default: AuthStatus = {
        logged: false,
        user: null,
    };

    const [AuthStatus, setAuthStatus] = useState<AuthStatus>(Default);
    const [AppLoading, setAppLoading] = useState(true);

    return (
        <AuthContext.Provider
            value={{ AuthStatus, setAuthStatus, AppLoading, setAppLoading }}
            children={children}
        />
    );
};