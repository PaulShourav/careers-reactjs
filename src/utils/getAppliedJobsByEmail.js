import useAuth from "../hooks/useAuth";
import useSWR from "swr";


const getAppliedJobsByEmail = () => {
    const { user } = useAuth()
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data: appliedJobs = [],mutate } = useSWR(`http://localhost:5000/appliedJob?email=${user?.email}`, fetcher);
 
    return { appliedJobs,mutate };
};

export default getAppliedJobsByEmail;