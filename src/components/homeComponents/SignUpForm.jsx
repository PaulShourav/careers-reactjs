import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaBoxOpen, FaEnvelope, FaFileImport, FaLock, FaPhone, FaUserLarge, } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAdminUser from "../../hooks/useAdminUser";


const SignUpForm = ({ setTabActive }) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { signUp } = useAuth()
    const [adminUser,isAdminLoading]=useAdminUser()
    const password = watch("password");
    const resumeFile = watch("resumeFile") || true;
   console.log(isAdminLoading,adminUser);
    const handleSignUp = (data) => {
        //Set only file Name
        data['resumeFile']=data.resumeFile[0].name;
       
        //Sign up using Firebase authentication
        signUp(data.email, data.password)
            .then((userCredential) => {
                //Store data in database
                handleAddUser(data)

            })
            .catch((error) => {
                console.log(error.message);
                toast.error('Please Login.Already Sign up...')

            });
    }
    const handleAddUser = (data) => {
        // const newData={}
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        },)
            .then(res => res.json())
            .then(data => {
                toast.success(`${data.message}`)
                reset()
            })
    }
    return (
        <>
            <p className=" border-b-[1px]  pb-1 text-center -mt-6 mb-9">If you already have  account then please <button className="text-indigo-800 underline font-semibold" onClick={() => setTabActive('signin')}>Login</button></p>
            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
                <div >
                    <div className="flex items-center border rounded-md p-2">
                        <span className="mr-2"><FaUserLarge /></span>
                        <input type="text" {...register("name", { required: true })} placeholder='Enter Your Full Name' className="w-full focus:outline-none" />
                    </div>
                    {errors.name?.type === "required" && (
                        <p className="text-red-400">Email field is required</p>
                    )}
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:basis-1/2">
                        <div className="flex items-center border rounded-md p-2">
                            <span className="mr-2"><FaEnvelope /></span>
                            <input type="text" {...register("email", { required: true })} placeholder='Enter your email' className="w-full focus:outline-none" />
                        </div>
                        {errors.email?.type === "required" && (
                            <p className="text-red-400">Email field is required</p>
                        )}
                    </div>
                    <div className="w-full md:basis-1/2">
                        <div className="flex items-center border rounded-md p-2">
                            <span className="mr-2"><FaPhone /></span>
                            <input type="number" {...register("phoneNumber", {
                                required: true, pattern: {
                                    value: /^\d{11}$/,
                                    message: 'Please enter a valid 11-digit mobile number',
                                }
                            })} placeholder='Enter Your Phone Number' className="w-full focus:outline-none" />
                        </div>
                        {errors.phoneNumber?.type === "required" && (
                            <p className="text-red-400">Email field is required</p>
                        )}
                        {errors.phoneNumber?.type === "pattern" && (
                            <p className="text-red-400">{errors.phoneNumber.message}</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:basis-1/2">
                        <div className="flex items-center border rounded-md p-2">
                            <span className="mr-2"><FaLock /></span>
                            <input type="password" {...register("password", { required: true })} placeholder='Password' className="w-full focus:outline-none" />
                        </div>
                        {errors.password?.type === "required" && (
                            <p className="text-red-400">Email field is required</p>
                        )}
                    </div>
                    <div className="w-full md:basis-1/2">
                        <div className="flex items-center border rounded-md p-2">
                            <span className="mr-2"><FaLock /></span>
                            <input type="password" {...register("confirmPassword", { required: true, validate: (value) => value == password || "Passwords do not match", })} placeholder='Re-Type Password' className="w-full focus:outline-none" />
                        </div>
                        {errors.confirmPassword?.type === "required" && (
                            <p className="text-red-400">Email field is required</p>
                        )}
                        {errors.confirmPassword && (
                            <p className="text-red-400">{errors.confirmPassword.message
                            }</p>
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex gap-9">
                        <div className="form-control">
                            <label className="flex items-center gap-2">
                                <input type="radio" {...register('gender', { required: "Please select gender.", value: "male" })} name="radio-10" className="radio checked:bg-blue-500" />
                                <span className="label-text">Male</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex items-center gap-2">
                                <input type="radio" {...register('gender', { required: "Please select gender.", value: "female" })} name="radio-10" className="radio checked:bg-blue-500" />
                                <span className="label-text">Female</span>
                            </label>
                        </div>
                    </div>
                    {
                        errors.gender?.type == "required" && <p className="text-red-400">{errors.gender.message}</p>
                    }
                </div>
                <div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="fileInput" className="bg-white border-dashed border-2 border-indigo-600 px-4 py-6 rounded-lg shadow-lg cursor-pointer  w-full">
                            <div className="flex flex-col items-center text-center">
                                {
                                    resumeFile?.length === 0 ? <> <span className="text-2xl text-indigo-500"><FaBoxOpen /></span>
                                        <span className="text-lg font-semibold py-2">Drag and drop or Browse</span>
                                        <span className="text-slate-300">Please upload your cv or resume only in word document or pdf file with your photography in it.</span></> : <><span className="text-2xl text-white bg-indigo-300 rounded-full p-4 "><FaFileImport /></span>
                                        <span className="text-lg font-semibold text-gray-400 py-2">Resume File</span></>
                                }
                            </div>
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                                accept="image/pdf/*"
                                {...register('resumeFile', { required: "Drag or drop a file." })}

                            />
                        </label>
                    </div>
                    {errors.resumeFile?.type === "required" && (
                        <p className="text-red-400">{errors.resumeFile.message}</p>
                    )}
                </div>
                <button type="submit" className="btn btn-sm btn-primary rounded-full px-8">Sign Up</button>
            </form>

        </>
    );
};

export default SignUpForm;