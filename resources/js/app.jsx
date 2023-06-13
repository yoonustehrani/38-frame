import './bootstrap';
import 'animate.css';
import { createRoot } from 'react-dom/client';
import Roadmap from './components/Roadmap';

const reactRoadmapElement = document.getElementById('react-roadmap')
const roadmapRoot = createRoot(reactRoadmapElement)


roadmapRoot.render(<Roadmap steps={JSON.parse(reactRoadmapElement.getAttribute('data-roadmap'))}/>)