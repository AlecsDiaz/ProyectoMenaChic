import { FC, ReactElement } from 'react';
import styles from '../scss/pages/contact.module.scss';
import { BiTime } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ContactPage: FC = ({ }): ReactElement => {
    return (
        <section>
            <div className={styles.container} >

                <div>

                    <a href='https://api.whatsapp.com/send?phone=%2B529931576004&data=ARDchjkMTIVgxMLtUxlHjdBtX8iO-1wtOa3S3P-ica0biW7VjtnUNVKTnTpi3IOGYgtivqpfODwnvm7NrhohCju4Nz3wCmpgUhtr9zfMGdhAYIQbjoVndmc6tU45cU3agy7YKq5wAGXHctgfgsNOqzlILw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR19UapDH2Nme_0sMRz_HfgqLU2JmgV9NnI4qmzHNObrJJBsN1qZP-Hd3JQ'>
                        <FaWhatsapp color="#64C150" />
                        <h4> + 52 (99) 3157 6004</h4>
                    </a>

                </div>
                <div>

                    <MdEmail />
                    <h5>menachic@gmail.com</h5>

                </div>
                <div>

                    <BiTime />

                    <h6>Horarios de atención</h6>
                    <p>Lunes a Sábado:</p>
                    <p>9:00 am - 17:00 pm</p>

                </div>

            </div>

            <div className={styles.mapa}>
                <p>Ubicación</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.1014710295417!2d-92.93509602604146!3d17.97401548564327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd91ceff1a27d%3A0x6e6c45c9ee758b67!2sMenaChic!5e0!3m2!1sen!2smx!4v1692329121762!5m2!1sen!2smx" width="600" height="350" ></iframe>

            </div>





        </section>


    )
}
