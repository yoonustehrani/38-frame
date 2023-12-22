import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Auth from '../Auth'
import Error404 from '../WebPanel/Error404'
import Error403 from './Pages/Error403'
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
                path: '/labs',
                children: [
                    {
                        index: true,
                        lazy: () => import('./Pages/Labs/Labs')
                    },
                    {
                        path: 'create',
                        lazy: () => import('./Pages/Labs/CreateLab')
                    },
                    {
                        path: ':labId/edit',
                        lazy: () => import('./Pages/Labs/EditLab')
                    }
                ]
            },
            {
                path: '/posts',
                children: [
                    {
                        index: true,
                        lazy: () => import('./Pages/Posts/Posts')
                    },
                    {
                        path: 'create',
                        lazy: () => import('./Pages/Posts/CreatePost')
                    },
                    {
                        path: ':postId/edit',
                        lazy: () => import('./Pages/Posts/EditPost')
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

export const getRouter = (isLoggedIn: boolean, userAllowed: boolean) => {
    if (! userAllowed) {
        return createBrowserRouter([
            {
                path: '*',
                Component: Error403
            }
        ])
    }
    if (isLoggedIn) {
        return createBrowserRouter(routes, { basename: '/38panel'})
    }
    return createBrowserRouter([
        {
            path: '*',
            element: (
                <main className="w-full h-full bg-shark bg-no-repeat bg-center bg-cover">
                    <section className="h-full w-full overflow-x-hidden overflow-y-auto bg-black/80 flex justify-center items-center">
                        <Auth endpoint='/admin/auth/login' googleEndpoint='/admin/auth/google'/>
                    </section>
                </main>
            )
        }
    ], {basename: '/38panel'})
}