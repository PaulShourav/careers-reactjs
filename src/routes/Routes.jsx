import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../views/layouts/HomeLayout';
import DashboardLayout from '../views/layouts/DashboardLayout';
import HomePage from '../views/home/home/HomePage';
import SignInAndUpPage from '../views/home/signInAndUp/SignInAndUpPage';
import JobDetailsPage from '../views/home/joddetails/JobDetailsPage';
import UserPage from '../views/dashboard/user/UserPage';
import JobsPage from '../views/dashboard/viewJobs/JobsPage';

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
                path:'/job/:slug',
                element:<JobDetailsPage/>
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
           {
            path:'/dashboard/users',
            element:<UserPage/>
           },
           {
            path:'/dashboard/job',
            element:<JobsPage/>
           }
        ]
    }
])
export default router;