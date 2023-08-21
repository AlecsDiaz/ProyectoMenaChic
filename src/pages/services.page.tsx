import { FC, ReactElement } from 'react';
import styles from '../scss/pages/service.module.scss';



export const ServicePage: FC = ({ }): ReactElement => {
    return (
        <section >
            <div className={styles.container}>

                <div>
                    <p>Uñas acrílicas </p>
                    <img src='https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' width={150} height={165}></img>
                    <img src='https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=600' width={150} height={165}></img>
                </div>
                <div>
                    <p>
                        Gelish con diseño
                    </p>
                    <img src='https://media.glamour.mx/photos/647839a252d6f45007f496e3/master/w_1600,c_limit/un%CC%83as_de_gelish_para_verano_confetti.jpg' width={150} height={165}></img>
                    <img src='https://media.glamour.mx/photos/647826f7af12f5514d139f80/master/w_1600,c_limit/un%CC%83as_de_gelish_para_verano_rosa_barbie.jpg' width={150} height={165}></img>
                </div>
                <div>
                    <p>
                        Manicure
                    </p>
                    <img src='https://pink-mask.com/wp-content/uploads/2022/01/New-York.webp' width={150} height={165}></img>
                    <img src='https://media.glamour.mx/photos/621f126582c90a0d34bc3689/master/w_1600,c_limit/un%CC%83as-acri%CC%81licas-3.jpeg' width={150} height={165}></img>
                </div>
                <div>
                    <p>Gelish con ruber</p>
                    <img src='https://t2.uc.ltmcdn.com/es/posts/9/9/6/como_aplicar_gelish_paso_a_paso_50699_600_square.jpg' width={150} height={165}></img>
                    <img src='https://media.glamour.mx/photos/64013fe41e79ef39e104b437/master/w_1600,c_limit/manicure_dia_de_la_mujer.jpg' width={150} height={165}></img>
                </div>
            </div>

            <div className={styles.parrafo}>
                <p>
                    En Mena Chic, nuestra pasión por la excelencia se refleja en
                    cada aspecto de nuestro servicio. Estamos comprometidos en
                    brindarte una experiencia de calidad que no solo realza la belleza
                    de tus manos, sino que también despierta tus sentidos y te sumerge
                    en un mundo de lujo y sofisticación.
                    La calidad de servicio que ofrecemos en Mena Chic va más allá de las
                    uñas perfectamente cuidadas. Es un compromiso con tu satisfacción y
                    bienestar. Valoramos tu tiempo y tus deseos, y nos esforzamos por
                    superar tus expectativas en cada paso del camino.
                    Te invitamos a experimentar el lujo y el arte en Mena Chic. Descubre
                    por ti mismo cómo la calidad se convierte en un estilo de vida en
                    nuestras manos expertas. Tu belleza y confianza son nuestra máxima
                    prioridad, y estamos aquí para brindarte nada menos que lo mejor.
                </p>
            </div>

        </section>
    )
}
