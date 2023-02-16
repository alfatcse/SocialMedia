import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/Components/About";
import Home from "../Pages/Components/Home";
import Login from "../Pages/Components/Login";
import Media from "../Pages/Components/Media";
import Main from "../Pages/Layout/Main";
import Comment from "../Pages/Components/Comment";
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
                element:<Media></Media>,
                // children:[
                //     { path:'/media/comment',
                //      element:<Comment></Comment>}
                //  ]
            },
            {
                path:'/about',
                element:<About></About>
            }
        ],  
    }
])
export default router;