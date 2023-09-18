import { createRoot } from 'react-dom/client';
import UserArea from './components/UserArea/UserArea';

const UserAreaDivElement = document.getElementById('react-userarea')
if (UserAreaDivElement) {
    const userAreaReactRoot = createRoot(UserAreaDivElement)
    userAreaReactRoot.render(<UserArea />)
}