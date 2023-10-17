import { FaCirclePlus } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import getAppliedJobsByEmail from "../../utils/getAppliedJobsByEmail";

const JobDetails = ({ job }) => {
    const { _id, slug, longTitle, location, jobResponsibilities, educationalRequirements, experienceRequirements } = job || {};
    const { user } = useAuth()
    const navigate = useNavigate()
    const { mutate } = getAppliedJobsByEmail()

    const benefits = [
        'Yearly 3 times Salary Reviews/Increment',
        'Weekly 2 Holidays',
        'Monthly Project Bonus',
        'Yearly 21 Paid Leaves',
        'Weekly Session',
        'Lunch, coffee & snacks',
        'Provident Fund',
        'Overtime Allowance',
        '100% Festival Bonus',
        'Medical Allowance',
        'Yearly Tax Return',
        'Weekly Sports Day',
        'Annual Tour'
    ]


    const storeAppliedJob = (newData) => {
        fetch('http://localhost:5000/appliedJob', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(data.message),
                mutate(),
                navigate('/')
            })
    }
    const handleApplyJob = (_id, slug) => {
        const newData = { email: user?.email, job: _id, slug: slug }
        if (!user) {
            navigate('/signin')
        } else (
            storeAppliedJob(newData)
           
        )
    }
    return (
        <>
            <div className="mb-10">
                <p className="font-bold text-2xl">Who We Are?</p>
                <p className="mt-3 text-justify">Mediusware Ldiv. is a software company providing world-class software solutions backed by state of the art-of-technology. Our success comes from designing, building, and maintaining software solutions for our users, and our growth comes from expanding and improving our products as quickly as we can. We believe that great products can only be built by great people. Thus, we are on a quest to find the smartest, most creative, and motivated people, and we are developing an environment in which they can thrive.</p>
            </div>
            <div className="mb-10">
                <p className="font-bold text-2xl"> What do We Believe?</p>
                <p className="text-lg font-semibold text-justify  mt-3 ">Believe in Quality || Friendly Mindset || Respect & Empathy || Learn & Grow || A World of Fun </p>
            </div>
            <div className="mb-10">
                <p className="font-bold text-2xl"> What We Are Looking For?</p>
                <p className="text-justify  mt-3 " dangerouslySetInnerHTML={{ __html: longTitle }}></p>
            </div>

            <div className="mb-10">
                <p className="font-bold text-2xl">Job responsibilities and requirements:</p>
                <ul className="mt-4">
                    {jobResponsibilities?.map((element, index) => <li key={index + 1} className="flex items-center gap-2 ms-4"> <span><FaCirclePlus /></span>{element.value}</li>)}
                </ul>
            </div>
            <div className="mb-10">
                <p className="font-bold text-2xl">Educational requirements:</p>
                <ul className="mt-4">
                    {educationalRequirements?.map((element, index) => <li key={index + 1} className="flex items-center gap-2 ms-4"> <span><FaCirclePlus /></span>{element.value}</li>)}
                </ul>
            </div>
            <div className="mb-10">
                <p className="font-bold text-2xl">Experience requirements:</p>
                <ul className="mt-4">
                    {experienceRequirements?.map((element, index) => <li key={index + 1} className="flex items-center gap-2 ms-4"> <span><FaCirclePlus /></span>{element.value}</li>)}
                </ul>
            </div>
            <div className="mb-10">
                <p className="font-bold text-2xl">Benefits:</p>
                <ul className="mt-4">
                    {benefits?.map((element, index) => <li key={index + 1} className="flex items-center gap-2 ms-4"> <span><FaCirclePlus /></span>{element}</li>)}
                </ul>
            </div>
            <div className="mb-10">
                <p className="font-bold text-2xl">Location:</p>
                <p className="mt-3 text-justify">{location}</p>
            </div>
            <button className="btn btn-primary px-5" onClick={() => handleApplyJob(_id, slug)}>Apply Now</button>
        </>
    );
};

export default JobDetails;