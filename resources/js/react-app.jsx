import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import Loading from './components/Loading';
const Roadmap = lazy(() => import('./components/Roadmap'));
const Gallery = lazy(() => import('./components/Gallery'));
const Blog = lazy(() => import('./components/Blog'));

const reactRoadmapElement = document.getElementById('react-roadmap')
const roadmapRoot = createRoot(reactRoadmapElement)

roadmapRoot.render(
    <Loading>
        <Roadmap steps={JSON.parse(reactRoadmapElement.getAttribute('data-roadmap'))}/>
    </Loading>
)

const reactGalleryElement = document.getElementById('react-gallery')
const galleryRoot = createRoot(reactGalleryElement)

galleryRoot.render(
    <Loading>
        <Gallery/>
    </Loading>
)