import { FC, ReactElement } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../../scss/components/appoinments.module.scss'

export const UsersTabs: FC = (): ReactElement => {
    return (
        <div className={styles.container} >
            <div className={styles.tabs} >
                <Link to="/panel/usuarios/clientes" text='Clientes' />
                <Link to="/panel/usuarios/admins" text='Administradores' />
            </div>
            <div className={styles.content} >
                <Outlet />
            </div>
        </div>
    );
};

const Link: FC<Link> = ({ to, text }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                styles.tab + (isActive ? ` ${styles.active}` : "")
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