import Cookies from "js-cookie";
import useAuth from "./useAuth";
import useSWR from "swr";


const useAppliedJobsByEmail = () => {
    const fetcher = (url, token) => fetch(url, { headers: { "authorizatication": `Bearer ${token}` } }).then(res => res.json())
    const { user } = useAuth()

    const accessToken = Cookies.get('BD-Tech-Solution')
    const { data: appliedJobs = [], mutate } = useSWR(user ? [`http://localhost:5000/appliedJob?email=${user?.email}`, accessToken] : null, ([url, accessToken]) => fetcher(url, accessToken))
    return { appliedJobs };

};

export default useAppliedJobsByEmail;