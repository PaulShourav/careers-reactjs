import { Link } from "react-router-dom";
import { FaLock, FaRectangleList, FaUserLarge } from "react-icons/fa6";
import { useState } from "react";
import Profile from "../../../components/homeComponents/Profile";
import AppliedJobs from "../../../components/homeComponents/AppliedJobs";
import ChangePassword from "../../../components/homeComponents/ChangePassword";

const UserDashboardPage = () => {
    const [activeTab, setActiveTab] = useState('myProfile')
    return (
        <>
            <section className="my-container my-20">
                <div className="flex justify-center gap-5 border-b pb-3">
                    <Link to={''} className={`btn btn-sm btn-outline btn-primary rounded-full ${activeTab == 'myProfile' ? 'btn-active' : ''}`} onClick={() => setActiveTab('myProfile')}><FaUserLarge /> My profile</Link>
                    <Link to={''} className={`btn btn-sm btn-outline btn-primary rounded-full ${activeTab == 'appliedJob' ? 'btn-active' : ''}`} onClick={() => setActiveTab('appliedJob')}><FaRectangleList /> Applied Job</Link>
                    <Link to={''} className={`btn btn-sm btn-outline btn-primary rounded-full ${activeTab == 'changePassword' ? 'btn-active' : ''}`} onClick={() => setActiveTab('changePassword')}><FaLock /> Change Password</Link>
                </div>

                <div className="flex justify-center">
                    <div className='bg-transparent md:bg-white md:shadow-lg md:shadow-indigo-500 w-full md:w-[700px] rounded-md  p-4'>
                        {activeTab == "myProfile" && <Profile/>}
                        {activeTab == "appliedJob" && <AppliedJobs/>}
                        {activeTab == "changePassword" && <ChangePassword/>}
                    </div>
                </div>
            </section>

        </>
    );
};

export default UserDashboardPage;