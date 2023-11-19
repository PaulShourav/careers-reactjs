import { Outlet } from "react-router-dom";
import Footer from "../../components/homeComponents/Footer";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/common/Loading";
import Header from "../../components/homeComponents/Header";


const HomeLayout = () => {
    const {isLoading}=useAuth()
    if (isLoading) {
        return <Loading/>
    }
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default HomeLayout;