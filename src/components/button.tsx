import { FC, ReactElement } from 'react';
import styles from '../scss/components/buttonwelcome.module.scss';
import { BiCalendar } from "react-icons/bi";


export const ButtonWelcome: FC = ({ }): ReactElement => {
    return (
        <div className={styles.container}>
            <BiCalendar />
            <h2> AGENDAR CITA </h2>

        </div>
    )
}