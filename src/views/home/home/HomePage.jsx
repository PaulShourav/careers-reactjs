import useSWR from "swr";
import Banner from "../../../components/homeComponents/Banner";
import JobCard from "../../../components/homeComponents/JobCard";
import useTitle from "../../../hooks/useTitle";
import getAllJobs from "../../../utils/getAllJobs";
import getAppliedJobsByEmail from "../../../utils/getAppliedJobsByEmail";
import useAppliedJobsByEmail from "../../../hooks/useAppliedJobsByEmail";



const HomePage = () => {
    useTitle('Home')
    const { jobs } = getAllJobs()
     const  {appliedJobs} = useAppliedJobsByEmail()
    

    
    console.log(appliedJobs); 
    return (
        <>
        <section className="my-container mt-2">
            <Banner/>
        </section>
            {
                appliedJobs?.length>0 ? <section className="my-container  mt-20">
                    <div className="border-b-2 ">
                        <p className="text-2xl font-bold uppercase pb-2 ps-1">Applied Jobs</p>
                    </div>
                    <div className="mt-3">
                        {appliedJobs.map((job, index) => <JobCard key={job._id} job={job.job} indexNo={index} />)}
                    </div>
                </section>:''
            }
            <section className="my-container  my-20">
            <div className="border-b-2 ">
                        <p className="text-2xl font-bold uppercase pb-2 ps-1">Available Jobs</p>
                    </div>
                    <div className="mt-3">

                {jobs?.map((job, index) => <JobCard key={job._id} job={job} indexNo={index} />)}
                    </div>
            </section>

        </>
    );
};

export default HomePage;