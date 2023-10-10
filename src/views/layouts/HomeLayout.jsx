import { Outlet } from "react-router-dom";
import Navbar from "../../components/homeComponents/Navbar";
import Footer from "../../components/homeComponents/Footer";


const HomeLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default HomeLayout;