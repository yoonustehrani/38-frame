import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Error404 from './Pages/Error404'
// import Dashboard from './Pages/Dashboard'
// import UserSettings from './Pages/UserSettings'
// const fakeLazy = (seconds: number, path: string) => {
//     return new Promise<RouteObject>((resolve, reject) => {
//         setTimeout(async () => {
//             try {
//                 const app = () => import(/* @vite-ignore */`./${path}`)
//                 resolve(app());
//             } catch (error) {
                
//             }
//         }, seconds * 1000);
//     })
// }

const routes: RouteObject[] = [
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                lazy: () => import('./Pages/Dashboard')
            },
            {
                path: '/settings',
                lazy: () => import('./Pages/UserSettings'),
                children: [
                    {
                        index: true,
                        lazy: () => import('./Pages/Settings/ProfileSettings')
                    },
                    {
                        path: 'social',
                        lazy: () => import('./Pages/Settings/SocialSettings')
                    },
                    {
                        path: 'auth',
                        lazy: () => import('./Pages/Settings/AuthSettings')
                    }
                ]
            },
            {
                path: '/ads',
                children: [
                    {
                        index: true,
                        lazy: () => import('./Pages/Ads/Ads')
                    },
                    {
                        path: 'create',
                        lazy: () => import('./Pages/Ads/CreateAd')
                    }
                ]
            },
            {
                path: '/shop',
                children: [
                    {
                        index: true,
                        lazy: () => import('./Pages/Shop/Shop')
                    },
                    {
                        path: 'register',
                        lazy: () => import('./Pages/Register/Shop')
                    },
                    // {
                    //     path: 'lab'
                    // }
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