import styles from '../scss/components/header.module.scss'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FC, ReactElement } from 'react';

export const Header: FC = ({ }): ReactElement => {
    const { AuthStatus } = useAuth();

    return (
        <header className={styles.header} >
            <Link to='/' text='Inicio' />
            <Link to='/servicios' text='Servicios' />
            <Link to='/contacto' text='Contactos' />
            {
                AuthStatus.logged && AuthStatus.user.role === "admin" && <Link to="/panel" text="Panel de control" />
            }
        </header>
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