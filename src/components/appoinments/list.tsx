import { FC, ReactElement, Fragment } from 'react';
import { useAppoinments } from '../../hooks/useAppoinments'
import { Appoinment as AppoinmentAtrributes } from '../../interfaces/appoinments.interface'
import styles from '../../scss/components/appoinments.module.scss'
import Gelish from '../../assets/gelish.jpg'
import Manicure from '../../assets/manicure.jpg'
import Nails from '../../assets/nails.jpg'


export const AppoinmentsList: FC<AppoinmentsList> = ({ mode }): ReactElement => {
    const { Appoinments } = useAppoinments();

    const next = Appoinments.filter(
        (app) => app.time.toMillis() > new Date().getTime());

    const past = Appoinments.filter(
        (app) => app.time.toMillis() < new Date().getTime());

    let list: typeof Appoinments = [];

    if (mode === "all") list = Appoinments;
    if (mode === "next") list = next;
    if (mode === "past") list = past;

    return (
        <Fragment>
            {
                list.map((app) => (<Appoinment key={app.id} time={app.time} type={app.type} id={app.id} />))
            }
        </Fragment>
    );
};

const Appoinment: FC<AppoinmentAtrributes> = ({ type, time, id }) => {
    let img = "";

    if (type === "gelish") img = Gelish;
    if (type === "manicure") img = Manicure;
    if (type === "nails") img = Nails;

    return (
        <div className={styles.item} >
            <div className={styles.row} >
                <span>Folio</span> <p>{id}</p>
            </div>
            <div className={styles.row} >
                <span>Fecha</span>
                <p>{time.toDate().toLocaleDateString('en-GB')}</p>
                <p>{time.toDate().toTimeString().split(' ')[0].slice(0, 5)}</p>
            </div>
            <div className={styles.row} >
                <span>Tipo</span> <p>{type}</p>
            </div>
            <img src={img} />
        </div>
    )
}

interface AppoinmentsList {
    mode: "next" | "past" | "all"
}