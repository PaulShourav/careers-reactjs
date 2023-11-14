import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useCandidateUser = () => {
    const {user}=useAuth()
   const [isCandidateLoading,setIsCandidateLoading]=useState(true)
   const [candidateUser,setCandidateUser]=useState(null)
   useEffect(()=>{
    // if (user) {
        fetch(`http://localhost:5000/users/candidateUser?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{setCandidateUser(data),setIsCandidateLoading(false)})
    // }else(
    //     setIsCandidateLoading(false)
    // )
   
   },[])

   return [candidateUser,isCandidateLoading]
};

export default useCandidateUser;