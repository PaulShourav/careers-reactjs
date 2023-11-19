import Heading from "../../../../components/dashboardComponents/Heading";
import AddandEditForm from "../../../../components/homeComponents/AddandEditForm";
import useTitle from "../../../../hooks/useTitle";


const AddJobPage = () => {
    useTitle('Add Job')
    return (
        <>
            <Heading title={'Add Jods'} hrefUrll={'/dashboard/jobs'} btnName={'All Jobs'}/>
            <AddandEditForm/>  
        </>
    );
};

export default AddJobPage;