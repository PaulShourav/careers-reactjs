import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../views/layouts/HomeLayout';
import DashboardLayout from '../views/layouts/DashboardLayout';
import HomePage from '../views/home/home/HomePage';
import SignInAndUpPage from '../views/home/signInAndUp/SignInAndUpPage';

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
            {
                path:'/signin',
                element:<SignInAndUpPage/>
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