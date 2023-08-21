import { FC, ReactElement } from 'react';
import styles from '../scss/pages/home.module.scss';
import { ButtonWelcome } from '../components/button';
import { SocialButt } from '../components/social';


export const HomePage: FC = ({ }): ReactElement => {
    return (
        <section className={styles.container} >
            <div>
                <div className={styles.title}>
                    <h1>
                        <span>MENA</span>
                        <span> CHIC</span>
                    </h1>
                </div>
                <div className={styles.subtitle}>
                    <h3>
                        Tu refugio de elegancia y estilo para el cuidado de uñas.
                        Nuestro equipo de artistas apasionados está listo para transformar tus
                        manos en auténticas obras de arte. Únete a nosotros y experimenta
                        la belleza en cada detalle. Agenda una cita para vivir una experiencia única.
                    </h3>
                </div>
                <ButtonWelcome />
                <SocialButt />
            </div>
            <img src="https://storage.googleapis.com/pai-images/95a94b5b26b24d14ad8a5c6487341f9b.jpeg" alt="" />
        </section>
    );
};