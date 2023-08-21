import { FC, ReactElement } from 'react';
import { AiOutlineLoading } from 'react-icons/ai'
import styles from '../scss/components/loading.module.scss'

export const LoadingWall: FC = (): ReactElement => {
    return (
        <div className={styles.container} >
            <AiOutlineLoading className={styles.spin} />
        </div>
    );
};