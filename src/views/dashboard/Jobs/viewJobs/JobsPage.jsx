import Heading from "../../../../components/dashboardComponents/Heading";
import JobsTable from "../../../../components/dashboardComponents/JobsTable";


const JobsPage = () => {
    return (
        <>
           <Heading title={"Jobs"} hrefUrll={'/dashboard/job/add'} btnName={"Add Job"}/>
           <JobsTable/> 
        </>
    );
};

export default JobsPage;