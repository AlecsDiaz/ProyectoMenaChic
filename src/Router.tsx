import { createBrowserRouter, Navigate } from 'react-router-dom'
import { App } from './App'
import { HomePage } from './pages/home.page'
import { ErrorPage } from './pages/error.page'
import { AuthPage } from './pages/auth.page'
import { ContactPage } from './pages/contact.page'
import { DashboardPage } from './pages/dashboard.page'
import { AppoinmentsTabs } from './components/appoinments/tabs'
import { UsersTabs } from './components/users/tabs'
import { AppoinmentsList } from './components/appoinments/list'
import { UserList } from './components/users/list'
import { ServicePage } from './pages/services.page'

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "*",
                element: <ErrorPage />
            },
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "contacto",
                element: <ContactPage />
            },
            {
                path: "servicios",
                element: <ServicePage />
            },
            {
                path: "auth",
                element: <AuthPage />
            },
            {
                path: "panel",
                element: <DashboardPage />,
                children: [
                    {
                        path: "*",
                        element: <ErrorPage />
                    },
                    {
                        path: "citas",
                        element: <AppoinmentsTabs />,
                        children: [
                            {
                                path: "*",
                                element: <ErrorPage />
                            },
                            {
                                path: "",
                                element: <Navigate to="proximas" />
                            },
                            {
                                path: "proximas",
                                element: <AppoinmentsList mode='next' />
                            },
                            {
                                path: "pasadas",
                                element: <AppoinmentsList mode='past' />
                            },
                            {
                                path: "todas",
                                element: <AppoinmentsList mode='all' />
                            },
                        ]
                    },
                    {
                        path: "usuarios",
                        element: <UsersTabs />,
                        children: [
                            {
                                path: "*",
                                element: <ErrorPage />
                            },
                            {
                                path: "",
                                element: <Navigate to="clientes" />
                            },
                            {
                                path: "clientes",
                                element: <UserList mode='clients' />
                            },
                            {
                                path: "admins",
                                element: <UserList mode='admins' />
                            },
                        ]
                    }
                ]
            }
        ]
    }
])