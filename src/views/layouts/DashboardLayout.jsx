import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    {/* <Header/> */}
                    <div className="px-10 py-12">

                    <Outlet/>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to={'/'}></Link></li>
                        <li><Link to={'/dashboard/users'}>Users</Link></li>
                        <li><Link to={'/jobs'}>Jobs</Link></li>
                    </ul>

                </div>
            </div>
    );
};

export default DashboardLayout;