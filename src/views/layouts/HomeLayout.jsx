import { Outlet } from "react-router-dom";
import Footer from "../../components/homeComponents/Footer";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/common/Loading";
import Header from "../../components/homeComponents/Header";




const HomeLayout = () => {
    const {isLoading}=useAuth()
    const now = new Date();

    // Calculate the expiration time (1 hour in milliseconds)
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
    console.log(oneHourLater);
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