import { Timestamp } from 'firebase/firestore'

export interface Appoinment {
    id: string;
    type: "gelish" | "nails" | "manicure";
    time: Timestamp
}

export type AppoinmentsType = {
    Appoinments: Appoinment[];
    setAppoinments: (value: Appoinment[]) => void;
};