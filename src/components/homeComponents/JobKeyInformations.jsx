

const JobKeyInformations = ({job}) => {
    const {vacancy, jobType, salary, location, publishedOn, deadline,  } = job || {};
    return (
        <div className="bg-gray-200 rounded-md w-full  ">
        <p className="bg-indigo-200 font-semibold text-xl text-center rounded-t-md py-3">Key informations</p>
            <div className="p-5 font-semibold">
             
               <div className="flex mb-2">
                    <div className="basis-1/2">Published On:</div>
                    <div className="basis-1/2">{publishedOn}</div>
                </div>
                <div className="flex mb-2">
                    <div className="basis-1/2">Vacancy:</div>
                    <div className="basis-1/2">{vacancy}</div>
                </div>
                <div className="flex mb-2">
                    <div className="basis-1/2">Experience:</div>
                    <div className="basis-1/2">{ 'Na'}</div>
                </div>
                <div className="flex mb-2">
                    <div className="basis-1/2">Salary:</div>
                    <div className="basis-1/2">{salary}</div>
                </div>
                <div className="flex mb-2">
                    <div className="basis-1/2">Job Type:</div>
                    <div className="basis-1/2">{jobType}</div>
                </div>
                <div className="flex mb-2">
                    <div className="basis-1/2">Deadline:</div>
                    <div className="basis-1/2">{deadline}</div>
                </div>
                <div className="flex mb-2">
                    <div className="basis-1/2">Location:</div>
                    <div className="basis-1/2">{location}</div>
                </div>
            </div>
            <div className="text-center">

            <button className="btn btn-primary px-5">Apply Now</button>
            </div>
     
    </div>
    );
};

export default JobKeyInformations;