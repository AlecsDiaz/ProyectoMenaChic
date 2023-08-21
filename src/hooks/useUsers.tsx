import { getDocs, collection } from 'firebase/firestore'
import { firestore } from '../config/firebase'
import { UserInformation, UsersType } from '../interfaces/auth.interface'
import { useContext } from 'react'
import { UsersContext } from '../contexts/users.context'
import { useAuth } from '../hooks/useAuth'

export const useUsers = () => {
    const { users, setUsers } = useContext(UsersContext) as UsersType;
    const { Auth } = useAuth();

    async function refreshUsers() {
        try {
            const ref = collection(firestore, "users");
            const data = await getDocs(ref);
            const users: UserInformation[] = []
            data.forEach((i) => users.push(i.data() as UserInformation))

            setUsers(users)
            Auth();
        } catch (error) {
            console.log(error)
        }
    }

    return {
        users, refreshUsers
    }
}