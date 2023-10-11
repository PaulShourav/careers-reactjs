

const JobsPage = () => {
    return (
        <>
           <Heading title={"Jobs"} hrefUrll={'jobs/add'} btnName={"Add Job"}/>
           <JobsTable/> 
        </>
    );
};

export default JobsPage;