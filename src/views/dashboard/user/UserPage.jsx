import useSWR from "swr";
import Heading from "../../../components/dashboardComponents/Heading";
import useAdminUser from "../../../hooks/useAdminUser";
import {useState } from "react";
import useTitle from "../../../hooks/useTitle";
import useUserByRoleType from "../../../hooks/useUserByRoleType";


const UserPage = () => {
   
    const [userRole,setUserRole]=useState('admin')
    useTitle(`${userRole} user`)
    const {users}=useUserByRoleType(userRole)

  
  
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
                            <th>Phone No</th>
                            <th>Resume</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr className="hover" key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>0{user.phoneNumber}</td>
                                <td><a href={`http://localhost:5000/careers-server/uploads/${user?.resumeFile}`} className="link link-primary" target="_blank">Resume</a></td>
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