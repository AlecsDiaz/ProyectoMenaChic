import { FC, ReactElement } from 'react';

export const ErrorPage: FC = ({ }): ReactElement => {
    return (
        <div>
            <h1>Error 404</h1>
            <h2>Página no encontrada</h2>
        </div>
    );
};