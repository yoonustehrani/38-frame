import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Dashboard from './Pages/Dashboard'
import UserSettings from './Pages/UserSettings'
import ProfileSettings from './Pages/Settings/ProfileSettings'
import SocialSettings from './Pages/Settings/SocialSettings'
import Error404 from './Pages/Error404'
import AuthSettings from './Pages/Settings/AuthSettings'
// import Dashboard from './Pages/Dashboard'
// import UserSettings from './Pages/UserSettings'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                Component: Dashboard
            },
            {
                path: '/settings',
                Component: UserSettings,
                children: [
                    {
                        index: true,
                        Component: ProfileSettings
                    },
                    {
                        path: 'social',
                        Component: SocialSettings
                    },
                    {
                        path: 'auth',
                        Component: AuthSettings
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        Component: Error404
    }
]

export const router = createBrowserRouter(routes, {
    basename: '/userarea'
})