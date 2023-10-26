import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Root from '../WebPanel/Root'
import Error404 from '../WebPanel/Error404'
import Auth from '../Auth'
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
                        lazy: () => import('./Pages/Shop/RegisterShop')
                    },
                    // {
                    //     path: 'lab'
                    // }
                ]
            },
            {
                path: '/lab',
                children: [
                    {
                        index: true,
                        lazy: () => import('./Pages/Lab/Lab')
                    },
                    {
                        path: 'register',
                        lazy: () => import('./Pages/Lab/RegisterLab')
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

export const getRouter = (isLoggedIn: boolean) => {
    return isLoggedIn ? createBrowserRouter(routes, { basename: '/userarea'}) : createBrowserRouter([{
        path: '*',
        element: (
            <main className="w-full h-full bg-shark bg-no-repeat bg-center bg-cover">
                <section className="h-full w-full overflow-x-hidden overflow-y-auto bg-black/80 flex justify-center items-center">
                    <Auth />
                </section>
            </main>
        )
    }], {basename: '/userarea'})
}