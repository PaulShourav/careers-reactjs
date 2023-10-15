import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useAdminUser = () => {
    const {user}=useAuth()
   const [isAdminLoading,setIsAdminLoading]=useState(true)
   const [adminData,setAdminData]=useState(null)
   useEffect(()=>{
    if (user) {
        fetch(`http://localhost:5000/users/adminUser?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{setAdminData(data),setIsAdminLoading(false)})
    }else(
        setIsAdminLoading(false)
    )
   
   },[])

   return [adminData,isAdminLoading]
};

export default useAdminUser;