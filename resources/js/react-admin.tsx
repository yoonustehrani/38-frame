import { createRoot } from 'react-dom/client';
import Admin from './components/Admin/Admin';

const AdminAreaDivElement = document.getElementById('react-admin-panel')
if (AdminAreaDivElement) {
    const adminAreaReactRoot = createRoot(AdminAreaDivElement)
    adminAreaReactRoot.render(<Admin />)
}