import JobCard from "../../../components/homeComponents/JobCard";
import getAllJobs from "../../../utils/getAllJobs";


const HomePage = () => {
    const jobs=getAllJobs()
    console.log(jobs);
    return (
        <div className="my-container  my-20">
            {jobs?.map((job,index)=><JobCard key={job._id} job={job} indexNo={index}/>)}
        </div>
    );
};

export default HomePage;