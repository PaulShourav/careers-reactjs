
import { FiSearch } from "react-icons/fi";
import { FaAngleDown, FaAngleUp, FaArrowRightFromBracket, FaHouse, FaUserShield } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import profilePic from '../../assets/images/profile.jpg'
import useCandidateUser from "../../hooks/useCandidateUser";
import useAdminUser from "../../hooks/useAdminUser";
import bdTectSolutionLogo from "../../../public/bdtechsolution.svg"


const Header = () => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)
    const { user, logout, loading } = useAuth()
    const { candidateUser } = useCandidateUser()


    // Sidebar hide when  Mobile menu item click
    const handleSidebarClose = () => {
        document.getElementById('my-drawer-3').checked = false
    }

    const handleLogout = () => {
        logout()
            .then(() => {
                // localStorage.removeItem('careers-access-token')
            })
            .catch((error) => console.log(error))
    };

    const commonNavLink = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'active-link ' : 'menu-item'} onClick={() => handleSidebarClose()}>Home</NavLink></li>
        <li><Link to={'/'}>Contact</Link></li>
    </>
    const beforeSignInNavLink = <>
        <li><NavLink to={'/signin'} className={({ isActive }) => isActive ? 'active-link-signin' : 'btn btn-sm btn-outline btn-primary rounded-full w-full'} onClick={() => handleSidebarClose()}><FaUserShield /> Singin/Up</NavLink></li>
    </>
    const afterSignInNavLink = <>
        <li>
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} onClick={() => setIsOpenDropdown(!isOpenDropdown)} className={`flex items-center  justify-center gap-8 border border-indigo-700 rounded-full p-[3px] ${isOpenDropdown ? 'bg-primary text-white' : ''}`}>
                    <div className="avatar">
                        <div className="w-7 rounded-full">
                            <img src={profilePic} alt="profile" width={28} height={28} />
                        </div>
                    </div>
                    <span className="pe-1">{isOpenDropdown ? <FaAngleDown /> : <FaAngleUp />}</span></label>
                {
                    isOpenDropdown && <ul tabIndex={0} onClick={() => setIsOpenDropdown(!isOpenDropdown)} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-e border-indigo-400 animate-custom mt-3 w-52 ">
                        <li><NavLink to={`${candidateUser ? '/user/setting' : 'dashboard'}`} className={({ isActive }) => isActive ? 'active-link' : ''}><FaHouse /> Dashboard</NavLink></li>
                        <li>
                            <button onClick={() => handleLogout()} className="flex items-center space-x-2px-4"><FaArrowRightFromBracket /><span>Logout</span>
                            </button>
                        </li>
                    </ul>
                }
            </div>
        </li>
    </>


    const navLink = user ? afterSignInNavLink : beforeSignInNavLink;
    return (
        <>
            <header className="my-container">
                <Link to={'/'} className="flex items-center justify-center gap-3 mt-8 mb-6">
                    <img src={bdTectSolutionLogo} alt="logo" className="w-10 h-10" />
                    <p className="text-xl md:text-2xl font-bold "><span className="text-green-500">BD</span>-TECH Solution</p>
                </Link>
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="w-full navbar min-h-[40px] bg-base-100 py-1 px-0  border-b border-indigo-200">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="md:flex-1">
                                <div className=" w-[320px] md:flex  hidden items-center border rounded-full p-1">
                                    <input type="text" placeholder="Search" className="w-full focus:outline-none ps-2" />
                                    <div className="mx-2 ">
                                        <FiSearch />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-none hidden lg:block">
                                <ul className="md:flex hidden items-center justify-center gap-10">
                                    {/* Navbar menu content here */}
                                    {commonNavLink}
                                    {navLink}
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* Mobile menu */}
                    <div className="drawer-side z-50 md:hidden">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="flex flex-col gap-3 p-4 w-80 min-h-full bg-base-200">
                            {/* Sidebar content here */}
                            <div>
                                <Link to={'/'} className="flex items-center justify-center gap-3 mt-8 mb-6">
                                    <img src={bdTectSolutionLogo} alt="logo" className="w-10 h-10" />
                                    <p className="text-xl md:text-2xl font-bold "><span className="text-green-500">BD</span>-TECH Solution</p>
                                </Link>
                            </div>
                            {commonNavLink}
                            {navLink}
                        </ul>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;