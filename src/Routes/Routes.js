import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/Components/About";
import Home from "../Pages/Components/Home";
import Login from "../Pages/Components/Login";
import Media from "../Pages/Components/Media";
import Main from "../Pages/Layout/Main";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/media',
                element:<Media></Media>
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])
export default router;