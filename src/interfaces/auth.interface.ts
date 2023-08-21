export interface UserInformation {
    email: string;
    phone: string;
    img: string;
    role: "user" | "admin"
}

export type UsersType = {
    users: UserInformation[];
    setUsers: (value: UserInformation[]) => void;
};


interface AuthStatusOff {
    logged: false;
    user: null;
}
interface AuthStatusOn {
    logged: true;
    user: UserInformation;
}

export type AuthStatus = AuthStatusOn | AuthStatusOff;

export type AuthStatusType = {
    AuthStatus: AuthStatus;
    setAuthStatus: (value: AuthStatus) => void;
    AppLoading: boolean;
    setAppLoading: (value: boolean) => void;
};