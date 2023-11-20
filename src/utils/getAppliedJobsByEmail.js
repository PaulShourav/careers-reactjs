import useAuth from "../hooks/useAuth";
import useSWR from "swr";
import Cookies from 'js-cookie';



const getAppliedJobsByEmail = () => {
    const { user } = useAuth()
    const authorizationHeader=`Bearer ${Cookies.get('BD-Tech-Solution')}`
    const fetcher = (...args) => fetch(...args,{headers:{authorizatication:authorizationHeader}}).then(res => res.json())
    const { data: appliedJobs = [],mutate } = useSWR(`http://localhost:5000/appliedJob?email=${user?.email}`, fetcher);
 
    return { appliedJobs,mutate };
};

export default getAppliedJobsByEmail;