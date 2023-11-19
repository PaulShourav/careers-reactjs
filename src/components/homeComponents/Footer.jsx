import { Link } from "react-router-dom";
import bdTectSolutionLogo from "../../../public/bdtechsolution.svg"


const Footer = () => {
    return (

        <footer className=" bg-base-200 text-base-content ">

            <div className="my-container footer p-10">
                <aside>
                    <Link to={'/'} className="">
                        <img src={bdTectSolutionLogo} alt="logo" className="w-12 h-12" />
                        <p className="text-xl md:text-2xl font-bold mt-1"><span className="text-green-500">BD</span>-TECH Solution</p>
                    </Link>
                    
                    <p>Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </div>


            <div className="bg-black p-4 text-center">
                <p>Copyright © 2023 - All right reserved by BD-Tech Solution</p>
            </div>
        </footer>


    );
};

export default Footer;