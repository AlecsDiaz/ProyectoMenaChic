import { createContext, useState, FC } from "react";
import { ComponentAttributes } from '../interfaces/index'
import { UsersType, UserInformation } from '../interfaces/auth.interface'

export const UsersContext = createContext<UsersType | null>(null);


export const UsersProvider: FC<ComponentAttributes> = ({ children }) => {
    const Default: UserInformation[] = []

    const [users, setUsers] = useState<UserInformation[]>(Default);


    return (
        <UsersContext.Provider
            value={{ users, setUsers }}
            children={children}
        />
    );
};