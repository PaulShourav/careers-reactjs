import Heading from "../../../../components/dashboardComponents/Heading";
import AddandEditForm from "../../../../components/homeComponents/AddandEditForm";


const AddJobPage = () => {
    return (
        <>
            <Heading title={'Add Jods'} hrefUrll={'/dashboard/jobs'} btnName={'All Jobs'}/>
            <AddandEditForm/>  
        </>
    );
};

export default AddJobPage;