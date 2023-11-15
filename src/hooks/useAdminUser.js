import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useSWR from "swr";


const useAdminUser = () => {
    const {user}=useAuth()
   
  
   const fetcher = (...args) => fetch(...args).then(res => res.json())
   const { data: adminUser ,mutate ,isLoading:isAdminLoading } = useSWR(`http://localhost:5000/users/adminUser?email=${user?.email}`, fetcher);
   return {adminUser,isAdminLoading,mutate}
  
};

export default useAdminUser;