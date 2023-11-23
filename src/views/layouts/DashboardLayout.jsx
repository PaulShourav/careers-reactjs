import { NavLink, Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import profilePic from '../../assets/images/profile.jpg'
import useAdminUser from "../../hooks/useAdminUser";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import Cookies from "js-cookie";
import { useEffect } from "react";


const DashboardLayout = () => {
    const { adminUser } = useAdminUser()
    const { logout } = useAuth()
    const handleLogout = () => {
        logout()
            .then(() => {
                Cookies.remove('BD-Tech-Solution')
            })
            .catch((error) => console.log(error))
    };


    useEffect(() => {
        const authToken = Cookies.get('BD-Teach-Solution');
        console.log('logout1');
        if (!authToken) {
            console.log('logout');
            logout()
                .then(() => {

                })
                .catch((error) => console.log(error))
        }
    }, []);
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                {/* Mobile navbar */}
                <div className="navbar bg-base-100  lg:hidden">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <p className=" text-xl  font-bold"><span className="text-green-500">BD</span>-TECH Solution</p>
                    </div>
                </div>
                <div className="mx-2 md:mx-10 my-12">
                    {/* Page content here */}
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu gap-1 p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <div className="flex flex-col items-center mt-8 border-b-2">

                        <img src={profilePic} alt="profile" className="outline outline-2 outline-indigo-400 outline-offset-2 rounded-full w-24 h-24" />

                        <p className="uppercase font-bold text-xl my-1">{adminUser?.name}</p>
                        <button className="btn btn-sm btn-primary mb-3" onClick={() => handleLogout()}><FaArrowRightFromBracket /><span>Logout</span></button>


                    </div>
                    {/* Sidebar content here */}
                    <li><NavLink to={'/dashboard/'} className={({ isActive }) => isActive ? "sidebar-active-link" : ""}>Dashboard</NavLink></li>
                    <li><NavLink to={'/dashboard/users'} className={({ isActive }) => isActive ? "sidebar-active-link" : ""}>Users</NavLink></li>
                    <li><NavLink to={'/dashboard/jobs'} className={({ isActive }) => isActive ? "sidebar-active-link" : ""}>Jobs</NavLink></li>
                    <li><NavLink to={'/dashboard/applied-candidate'} className={({ isActive }) => isActive ? "sidebar-active-link" : ""}>Applied Candidate</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;