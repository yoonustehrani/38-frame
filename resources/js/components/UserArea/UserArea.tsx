import { FC } from "react";
// import SideMenu from "./SideMenu";
// import TopNav from "./TopNav";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

interface UserAreaProps {
    
}
 
const UserArea: FC<UserAreaProps> = () => {
    return (
        <RouterProvider router={router} />
    );
}
 
export default UserArea;