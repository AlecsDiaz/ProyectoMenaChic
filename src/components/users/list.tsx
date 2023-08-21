import { FC, ReactElement, Fragment, useEffect } from 'react';
import { UserInformation } from '../../interfaces/auth.interface'
import { useProfile } from '../../hooks/useProfile'
import { useUsers } from '../../hooks/useUsers'
import styles from '../../scss/components/appoinments.module.scss'


export const UserList: FC<AppoinmentsList> = ({ mode }): ReactElement => {
    const { edit } = useProfile()
    const { refreshUsers, users } = useUsers()
    let list: UserInformation[] = [];


    useEffect(() => {
        refreshUsers()
    }, [])


    async function changeRole(email: string, role: "admin" | "user") {
        await edit(email, { role });
        refreshUsers();
    }

    if (mode === "clients") list = users.filter((user) => user.role === "user");
    if (mode === "admins") list = users.filter((user) => user.role === "admin");


    return (
        <Fragment>
            {
                list.map((user, i) => (
                    <p key={i} className={styles.user} >
                        {user.email}
                        <button onClick={() => changeRole(user.email, user.role === "user" ? "admin" : "user")}>
                            {user.role === "user" ? "Make admin" : "Remove"}
                        </button>
                    </p>))
            }
        </Fragment>
    );
};



interface AppoinmentsList {
    mode: "clients" | "admins" | "add"
}