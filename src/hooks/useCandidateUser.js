import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useSWR from "swr";


const useCandidateUser = () => {
    const {user}=useAuth()
 
   const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data: candidateUser ,isLoading:isCandidateLoading,mutate } = useSWR(`http://localhost:5000/users/candidateUser?email=${user?.email}`, fetcher);
    return {candidateUser,isCandidateLoading,mutate}

};

export default useCandidateUser;