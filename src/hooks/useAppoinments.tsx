import { getDocs, collection } from 'firebase/firestore'
import { firestore } from '../config/firebase'
import { Appoinment, AppoinmentsType } from '../interfaces/appoinments.interface'
import { useContext } from 'react'
import { AppoinmentsContext } from '../contexts/appoinments.context'

export const useAppoinments = () => {

    const { Appoinments, setAppoinments } = useContext(AppoinmentsContext) as AppoinmentsType;


    async function refreshAppoinments() {
        try {
            const ref = collection(firestore, "users");
            const data = await getDocs(ref);
            const users: string[] = []
            data.forEach((i) => users.push(i.data().email))

            const citas: Appoinment[] = []


            for await (const email of users) {
                const name = `appoinments-${email}`;
                const ref = collection(firestore, name);
                const data = await getDocs(ref);
                data.forEach(doc => citas.push({
                    ...doc.data() as Appoinment,
                    id: doc.id
                }))
            }

            setAppoinments(citas)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        Appoinments, refreshAppoinments
    }
}