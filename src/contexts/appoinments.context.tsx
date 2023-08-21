import { createContext, useState, FC } from "react";
import { ComponentAttributes } from '../interfaces/index'
import { AppoinmentsType, Appoinment } from '../interfaces/appoinments.interface'

export const AppoinmentsContext = createContext<AppoinmentsType | null>(null);


export const AppoinmentsProvider: FC<ComponentAttributes> = ({ children }) => {
    const Default: Appoinment[] = []

    const [Appoinments, setAppoinments] = useState<Appoinment[]>(Default);


    return (
        <AppoinmentsContext.Provider
            value={{ Appoinments, setAppoinments }}
            children={children}
        />
    );
};