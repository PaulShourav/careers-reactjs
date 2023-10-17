import JobCard from "../../../components/homeComponents/JobCard";
import getAllJobs from "../../../utils/getAllJobs";
import getAppliedJobsByEmail from "../../../utils/getAppliedJobsByEmail";


const HomePage = () => {
    const {jobs}=getAllJobs()
    const {appliedJobs}=getAppliedJobsByEmail()
    console.log(appliedJobs);
    return (
        <div className="my-container  my-20">
            <section>
                
            </section>
            <section>
            {jobs?.map((job,index)=><JobCard key={job._id} job={job} indexNo={index}/>)}
            </section>
          
        </div>
    );
};

export default HomePage;