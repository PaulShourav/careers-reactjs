import useSWR from "swr";
import Heading from "../../../components/dashboardComponents/Heading";
import useAdminUser from "../../../hooks/useAdminUser";
import { useEffect, useState } from "react";
const fetcher = (...args) => fetch(...args).then(res => res.json())

const UserPage = () => {
    const [userRole,setUserRole]=useState('admin')

    const { data: users=[] ,mutate  } = useSWR(`http://localhost:5000/users/all-admin-users?role=${userRole}`, fetcher);

  
  
    return (
        <>
            <Heading title={"All Users"} />
            <section className="my-4">
                <div className="flex items-center justify-end gap-3 border-b-2 border-indigo-300 pb-2">
                    <p>Filter By:</p>
                <div className="join ">
                    <button className={`btn btn-sm join-item ${userRole=='admin'?'btn-primary':''}`} onClick={()=>setUserRole('admin')}>Admin</button>
                    <button className={`btn btn-sm join-item ${userRole=='candidate'?'btn-primary':''}`} onClick={()=>setUserRole('candidate')}>Candidate</button>
                </div>
                </div>   
            </section>
            <div className=" overflow-x-auto">
                <table className="table table-xs ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Resume</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr className="hover" key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.resumeFile}</td>
                                <td>
                                    
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

export default UserPage;