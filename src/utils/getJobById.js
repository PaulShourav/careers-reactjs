import { useEffect, useState } from "react";


const getJobById = (slug) => {
    const [job,setJob]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs/details/${slug}`)
        .then(res=>res.json())
        .then(data=>setJob(data))

    },[])
    return job;
};

export default getJobById;