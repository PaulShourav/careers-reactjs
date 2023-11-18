import useSWR from "swr";
import Heading from "../../../components/dashboardComponents/Heading";
import getAllJobs from "../../../utils/getAllJobs";

const AppliedCandidatePage = () => {
    // const { jobs } = getAllJobs()
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data: jobs = [], mutate } = useSWR('http://localhost:5000/appliedJob/all-applied-jobs', fetcher);

    console.log(jobs);
    return (
        <>
            <Heading title={"Applied Candidate"} />
            <div className=" overflow-x-auto">
                <table className="table table-xs ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Vacancy</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs?.map((job, index) => <tr className="hover" key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.vacancy}</td>
                                <td>{job.deadline}</td>
                                <td>
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-secondary">{job.appliedJobs.length || '0'}</span>
                                        <button className="btn btn-sm btn-primary rounded-full">Candidate</button>
                                    </div>
                                </td>
                                
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AppliedCandidatePage;