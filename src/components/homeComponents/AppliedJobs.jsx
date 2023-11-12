import getAppliedJobsByEmail from "../../utils/getAppliedJobsByEmail";
import JobCard from "./JobCard";

const AppliedJobs = () => {
    const { appliedJobs } = getAppliedJobsByEmail()
    return (
        <>
        {/* Show all applied jobs */}
        {appliedJobs?.map((job, index) => <JobCard key={job._id} job={job.job} indexNo={index} />)}

        {/* If havn't applid jobs */}
        {
            appliedJobs == 0 && <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>You didn't apply any Job.</span>
          </div>
        }
        </>
    );
};

export default AppliedJobs;