import getAllJobs from "../../../utils/getAllJobs";
import getUserByRoleType from "../../../utils/getUserByRoleType";


const DashboardHomePage = () => {
    const {jobs}=getAllJobs()
    const {users}=getUserByRoleType('candidate')
    return (
        <>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-lime-200  h-28 rounded-md p-3">
                    <p className="text-lg font-bold uppercase">Job Circular</p>
                     <p className="text-lg font-bold uppercase">{jobs.length}+</p>
                </div>
                <div className="bg-indigo-200  h-28 rounded-md p-3">
                    <p className="text-lg font-bold uppercase">Total candidate</p>
                    <p className="text-lg font-bold uppercase">{users.length}+</p>
                </div>
                
            </div>
        </section>
        </>
    );
};

export default DashboardHomePage;