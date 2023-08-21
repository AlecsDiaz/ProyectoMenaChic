import { FC, ReactElement, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from './components/header'
import { LoadingWall } from './components/loading'
import { useAuth } from './hooks/useAuth'

export const App: FC = ({ }): ReactElement => {

    const { AuthStatus, Auth, AppLoading } = useAuth()

    useEffect(() => {
        async function main() {
            await Auth();
        }
        main()
    }, [])

    if (AppLoading) return <LoadingWall />
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <span className="dev-info">
                    {JSON.stringify(AuthStatus.user)}
                </span>
            </main>
        </>
    );
};