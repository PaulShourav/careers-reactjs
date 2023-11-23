import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../views/layouts/HomeLayout';
import DashboardLayout from '../views/layouts/DashboardLayout';
import HomePage from '../views/home/home/HomePage';
import SignInAndUpPage from '../views/home/signInAndUp/SignInAndUpPage';
import JobDetailsPage from '../views/home/jobdetails/JobDetailsPage';
import UserPage from '../views/dashboard/user/UserPage';
import JobsPage from '../views/dashboard/Jobs/viewJobs/JobsPage';
import AddJobPage from '../views/dashboard/Jobs/addJob/AddJobPage';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import UserDashboardPage from '../views/home/userDashboard/UserDashboardPage';
import CandidateRoute from './CandidateRoute';
import AppliedCandidatePage from '../views/dashboard/appliedCandidate/AppliedCandidatePage';
import DashboardHomePage from '../views/dashboard/dashboardHome/DashboardHomePage';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';


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
            {
                path:'/user/setting',
                element:<PrivateRoute><CandidateRoute><UserDashboardPage/></CandidateRoute></PrivateRoute>
               }
        ]
    },
    {
        path:"dashboard/",
        element:<PrivateRoute><AdminRoute><DashboardLayout/></AdminRoute></PrivateRoute>,
        children:[
            {
                path:'/dashboard/',
                element:<AdminRoute><DashboardHomePage/></AdminRoute>
               },
           {
            path:'/dashboard/users',
            element:<AdminRoute><UserPage/></AdminRoute>
           },
           {
            path:'/dashboard/jobs',
            element:<AdminRoute><JobsPage/></AdminRoute>
           },
           {
            path:'/dashboard/job/add',
            element:<AdminRoute><AddJobPage/></AdminRoute>
           },
           {
            path:'/dashboard/applied-candidate',
            element:<AdminRoute><AppliedCandidatePage/></AdminRoute>
           },
          
        ]
    }
])
export default router;