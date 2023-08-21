import styles from '../scss/pages/dashboard.module.scss'
import { NavLink, Outlet } from 'react-router-dom';
import { Wall } from '../components/wall-auth'
import { FC, ReactElement, useEffect } from 'react';
import { useAppoinments } from '../hooks/useAppoinments'
import { useAuth } from '../hooks/useAuth'


export const DashboardPage: FC = ({ }): ReactElement => {

    const { refreshAppoinments } = useAppoinments();

    const { SignOut } = useAuth();

    useEffect(() => {
        async function main() {
            await refreshAppoinments();
        }
        main()
    }, [])

    return (
        <Wall mode='admin' >
            <div className={styles.container} >
                <nav className={styles.navigator} >
                    <Link to="/panel/citas" text='Citas' />
                    <Link to="/panel/usuarios" text='Usuarios' />
                    {/* <Link to="/panel/estadisticas" text='Estadisticas' /> */}
                    {/* <Link to="/panel/infomracion" text='Infomarción' /> */}
                    <button onClick={() => SignOut()} className={styles.button} >Cerrar sesión</button>
                </nav>
                <div className={styles.content} >
                    <Outlet />
                </div>
            </div>
        </Wall>
    );
};

const Link: FC<Link> = ({ to, text }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                styles.button + (isActive ? ` ${styles.active}` : "")
            }
            to={to}
            children={text}
        />
    );
};

interface Link {
    to: string;
    text: string;
}