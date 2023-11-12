import { useState } from "react";
import SignInForm from "../../../components/homeComponents/SignInForm";
import SignInUpTab from "../../../components/homeComponents/SignInUpTab";
import SignUpForm from "../../../components/homeComponents/SignUpForm";
import HeadingSignInUp from "../../../components/homeComponents/HeadingSignInUp";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";


const SignInAndUpPage = () => {
    const [tabActive, setTabActive] = useState('signin')
    const {user}=useAuth()
    // if user sign in then retun home page
    if (user) {
        return <Navigate to={'/'}/>
    }
    return (
        <div className="my-container">
            <SignInUpTab tabActive={tabActive} setTabActive={setTabActive} />
            <div className="flex justify-center">

                <div className='bg-transparent md:bg-white md:shadow-lg md:shadow-indigo-500 w-full md:w-[700px] rounded-md my-12 '>
                    {/* Sign in */}
                    <div className={`px-7 py-9  ${tabActive == 'signup' ? 'hidden' : ''}`}>
                    <HeadingSignInUp headingtTitle={'Login'} />
                        <SignInForm />
                    </div>
                    {/* Sign up */}
                    <div className={`px-7 py-9 ${tabActive == 'signin' ? 'hidden' : ''}`}>
                        <HeadingSignInUp headingtTitle={'Register'} />
                        <SignUpForm setTabActive={setTabActive}/>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default SignInAndUpPage;