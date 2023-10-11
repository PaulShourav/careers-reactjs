import JobCard from "../../../components/homeComponents/JobCard";
import getAllJob from "../../../utils/getAllJob";


const HomePage = () => {
    const jobs=getAllJob()
    console.log(jobs);
    return (
        <div className="my-container  my-20">
            {jobs?.map((job,index)=><JobCard key={job._id} job={job} indexNo={index}/>)}
        </div>
    );
};

export default HomePage;