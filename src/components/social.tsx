import { FC, ReactElement } from 'react';
import styles from '../scss/components/social.module.scss';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export const SocialButt: FC = ({ }): ReactElement => {
    return (
        <div className={styles.container}>
            <h3>REDES SOCIALES</h3>

            <a href='https://www.facebook.com/profile.php?id=100065720313550'><FaFacebook color="#1E8BE0" />
            </a>
            <a href='https://www.instagram.com/_menachic.studio/?hl=es-la'>
                <FaInstagram color="#DE4BA6" />
            </a>


        </div>

    )
}