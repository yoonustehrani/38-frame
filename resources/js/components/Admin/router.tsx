import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Auth from '../Auth'
import Error404 from '../WebPanel/Error404'
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
        ]
    },
    {
        path: '*',
        Component: Error404
    }
]

export const getRouter = (isLoggedIn: boolean) => {
    return isLoggedIn ? createBrowserRouter(routes, { basename: '/38panel'}) : createBrowserRouter([{
        path: '*',
        element: (
            <main className="w-full h-full bg-shark bg-no-repeat bg-center bg-cover">
                <section className="h-full w-full overflow-x-hidden overflow-y-auto bg-black/80 flex justify-center items-center">
                    <Auth />
                </section>
            </main>
        )
    }], {basename: '/38panel'})
}