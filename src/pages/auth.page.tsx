import { FC, ReactElement, FormEvent, useState } from 'react';
import { Wall } from '../components/wall-auth'
import { useAuth } from '../hooks/useAuth'
import styles from '../scss/pages/auth.module.scss'

export const AuthPage: FC = ({ }): ReactElement => {
    const { SignIn } = useAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")


    async function Submit(e: FormEvent) {
        e.preventDefault();

        const { user, message } = await SignIn({
            email,
            password,
        })
        if (!user) setMessage(message)
        else setMessage("");
    }

    return (
        <Wall mode='no-auth-exclusive'>
            <div className={styles.container} >
                <form onSubmit={Submit}>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button type='submit' children="Login" />

                    <p className={styles.error} >{message}</p>
                </form>
            </div>
        </Wall>
    );
};