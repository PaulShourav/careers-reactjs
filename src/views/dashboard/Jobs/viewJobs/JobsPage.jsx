import Heading from "../../../../components/dashboardComponents/Heading";
import JobsTable from "../../../../components/dashboardComponents/JobsTable";
import useTitle from "../../../../hooks/useTitle";


const JobsPage = () => {
    useTitle('View Jobs')
    return (
        <>
           <Heading title={"Jobs"} hrefUrll={'/dashboard/job/add'} btnName={"Add Job"}/>
           <JobsTable/> 
        </>
    );
};

export default JobsPage;