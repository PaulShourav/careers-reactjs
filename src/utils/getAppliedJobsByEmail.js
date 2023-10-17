import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";


const getAppliedJobsByEmail = () => {
    const { user } = useAuth()
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/appliedJob?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAppliedJobs(data))
        }

    }, [])
    return { appliedJobs };
};

export default getAppliedJobsByEmail;