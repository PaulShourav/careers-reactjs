import { Outlet } from "react-router-dom";
import Navbar from "../../components/homeComponents/Navbar";
import Footer from "../../components/homeComponents/Footer";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/common/Loading";


const HomeLayout = () => {
    const {user}=useAuth()
    if (!user) {
        return <Loading/>
    }
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default HomeLayout;