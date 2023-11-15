import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useSWR from "swr";


const useCandidateUser = () => {
    const {user}=useAuth()
 
   const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data: candidateUser ,mutate } = useSWR(`http://localhost:5000/users/candidateUser?email=${user?.email}`, fetcher);
    return {candidateUser,mutate}
//    useEffect(()=>{
//     // if (user) {
//         fetch(`http://localhost:5000/users/candidateUser?email=${user?.email}`)
//         .then(res=>res.json())
//         .then(data=>{setCandidateUser(data),setIsCandidateLoading(false)})
//     // }else(
//     //     setIsCandidateLoading(false)
//     // )
   
//    },[])

//    return [candidateUser,isCandidateLoading]
};

export default useCandidateUser;