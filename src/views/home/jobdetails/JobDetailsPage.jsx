import { useParams } from "react-router-dom";
import JobDetails from "../../../components/homeComponents/JobDetails";
import JobKeyInformations from "../../../components/homeComponents/JobKeyInformations";
import { useEffect, useState } from "react";
import getJobById from "../../../utils/getJobById";
import useTitle from "../../../hooks/useTitle";


const JobDetailsPage = () => {
    useTitle('Job details')
    const {slug} = useParams()
    const job = getJobById(slug)
    return (
        <section className="my-container my-24">
            <div className="flex gap-0 md:gap-7 ">
                <div className="w-full md:basis-2/3">
                    <JobDetails job={job} />
                </div>
                <div className="basis-1/3 md:flex hidden  ">
                    <JobKeyInformations job={job} />
                </div>
            </div>
        </section>
    );
};

export default JobDetailsPage;