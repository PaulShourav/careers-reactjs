import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../views/layouts/HomeLayout';
import DashboardLayout from '../views/layouts/DashboardLayout';
import HomePage from '../views/home/home/HomePage';

const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        // errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            
        ]
    },
    {
        path:"dashboard",
        element:<DashboardLayout/>,
        children:[
           
        ]
    }
])
export default router;