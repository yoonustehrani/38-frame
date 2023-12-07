import { ReactNode, StrictMode, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import Loading from './components/Loading';
import { StepObject } from './components/Roadmap/Roadmap';
const MobileMenu = lazy(() => import('./components/MobileMenu/MobileMenu'))
const Roadmap = lazy(() => import('./components/Roadmap'))
const Gallery = lazy(() => import('./components/Gallery'))
const Blog = lazy(() => import('./components/Blog'))
const Labs = lazy(() => import('./components/Labs/Labs'))

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

const roadmap = document.getElementById('react-roadmap')
var steps: Array<StepObject> = [];
if (roadmap) {
    let json_string = roadmap.getAttribute('data-roadmap') as string;
    steps = JSON.parse(json_string);
}

(() => {
    [
        {
            element: document.getElementById('react-mobile-menu'),
            toBeRendered: (
                <StrictMode>
                    <Loading>
                        <MobileMenu />
                    </Loading>
                </StrictMode>
            )
        },
        {
            element: document.getElementById('react-blog'),
            toBeRendered: (
                <StrictMode>
                    <Loading>
                        <Blog fetchPostsUrl=''/>
                    </Loading>
                </StrictMode>
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
        }, 
        {
            element: document.getElementById('react-labs'),
            toBeRendered: (
                <StrictMode>
                    <Loading>
                        <Labs />
                    </Loading>
                </StrictMode>
            )
        }
    ].map(renderToRoot)
})()
