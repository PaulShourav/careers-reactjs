import { useState } from "react";
import SignInForm from "../../../components/homeComponents/SignInForm";
import SignInUpTab from "../../../components/homeComponents/SignInUpTab";
import SignUpForm from "../../../components/homeComponents/SignUpForm";


const SignInAndUpPage = () => {
    const [tabActive, setTabActive] = useState('signin')
    return (
        <div className="my-container">
            <SignInUpTab tabActive={tabActive} setTabActive={setTabActive} />
            <div>
                
                <div className='flex items-center justify-center mt-12 '>
                    <div className="basis-1/2 flex items-center justify-center">
                        {/* <Lottie animationData={signInLottie} style={{ width: '350px' }} loop={true} /> */}
                    </div>
                    {/* Sign in */}
                    <div className={`basis-1/2   ${tabActive == 'signup' ? 'hidden' : ''}`}>
                        <SignInForm/>
                    </div>
                    {/* Sign up */}
                    <div className={`basis-1/2 ${tabActive == 'signin' ? 'hidden' : ''}`}>
                        <SignUpForm/>
                    </div>

                </div>
                

            </div>
        </div>
    );
};

export default SignInAndUpPage;