import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCandidateUser from "../../hooks/useCandidateUser";
import { useForm } from "react-hook-form";
import { FaBoxOpen, FaEnvelope, FaFileImport, FaLock, FaPhone, FaUserLarge, } from "react-icons/fa6";
import toast from "react-hot-toast";



const Profile = () => {
    const {candidateUser,mutate}=useCandidateUser()
    const { register, handleSubmit, reset,setValue, watch, formState: { errors } } = useForm();
    const file = watch("resumeFile") || true;
    useEffect(()=>{
        if(candidateUser){
            setValue('_id',candidateUser._id)
            setValue('name',candidateUser.name)
            setValue('email',candidateUser.email)
            setValue('phoneNumber',candidateUser.phoneNumber)
            candidateUser?.gender=='male'? document.getElementById('male').checked=true :''
            candidateUser?.gender=='female'? document.getElementById('female').checked=true :''
          
        }
    },[candidateUser])
   
    const handleUpdateProfile=(data)=>{
        console.log(data);
        const formData = new FormData();
        formData.append("file", data.resumeFile[0]);
        data['resumeFile']=data.resumeFile[0]?.name;
        formData.append("newData", JSON.stringify(data));
        fetch('http://localhost:5000/users/update', {
            method: "PATCH",
            body: formData
        },)
            .then(res => res.json())
            .then(data => {
                toast.success(`${data.message}`)
                mutate(),
                reset()
            })
    }
    return (
        <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-4">
            <input type="hidden" {...register("_id")} />
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
                        <div className="flex items-center border rounded-md p-2 opacity-50">
                            <span className="mr-2"><FaEnvelope /></span>
                            <input type="text" {...register("email", { required: true })} placeholder='Enter your email' className="w-full focus:outline-none" disabled />
                        </div>
                        
                    </div>
                    <div className="w-full md:basis-1/2">
                        <div className="flex items-center border rounded-md p-2 opacity-50">
                            <span className="mr-2"><FaPhone /></span>
                            <input type="number" {...register("phoneNumber", {
                                required: true, pattern: {
                                    value: /^\d{11}$/,
                                    message: 'Please enter a valid 11-digit mobile number',
                                }
                            } )} placeholder='Enter Your Phone Number' className="w-full focus:outline-none" disabled />
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div className="flex gap-9">
                        <div className="form-control">
                            <label className="flex items-center gap-2">
                                <input type="radio" value='male' {...register('gender', { required: "Please select gender."})}  id="male" className="radio radio-primary"   />
                                <span className="label-text">Male</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex items-center gap-2">
                                <input type="radio" value='female' {...register('gender', { required: "Please select gender."})}  id="female"  className="radio radio-primary" />
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
                                    file?.length === 0 ? <> <span className="text-2xl text-indigo-500"><FaBoxOpen /></span>
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
                                {...register('resumeFile')}

                            />
                        </label>
                    </div>
                   
                    <a href={`http://localhost:5000/careers-server/uploads/${candidateUser?.resumeFile}`} className="link link-primary" target="_blank">Your Resume</a>
                </div>
                
                <button type="submit" className="btn btn-sm btn-primary rounded-full px-8">Update</button>
            </form>
    );
};

export default Profile;