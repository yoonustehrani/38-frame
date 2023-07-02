import { ReactNode, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import Loading from './components/Loading';
import { StepObject } from './components/Roadmap/Roadmap';
const Roadmap = lazy(() => import('./components/Roadmap'));
const Gallery = lazy(() => import('./components/Gallery'));
const Blog = lazy(() => import('./components/Blog'));

type elementRendererArgumentTypes = {
    element: HTMLElement | null
    toBeRendered: ReactNode
    lazyloading?: boolean
}


function renderToRoot({element, toBeRendered}: elementRendererArgumentTypes) {
    if (element) {
        const root = createRoot(element)
        root.render(toBeRendered)
    }
}

const roadmap = document.getElementById('react-roadmap') as HTMLElement
let json_string = roadmap.getAttribute('data-roadmap') as string;
const steps: Array<StepObject> = JSON.parse(json_string);

(() => {
    [
        {
            element: document.getElementById('react-blog'),
            toBeRendered: (
                <Loading>
                    <Blog fetchPostsUrl=''/>
                </Loading>
            )
        },
        {
            element: document.getElementById('react-gallery'),
            toBeRendered: (
                <Loading>
                    <Gallery />
                </Loading>
            )
        },
        {
            element: roadmap,
            toBeRendered: (
                <Loading>
                    <Roadmap steps={steps}/>
                </Loading>
            )
        }
    ].map(renderToRoot)
})()
