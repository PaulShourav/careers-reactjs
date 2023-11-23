import Cookies from "js-cookie";
import useSWR from "swr";

const fetcher = (url, token) => fetch(url, { headers: { "authorizatication": `Bearer ${token}` } }).then(res => res.json())
const useUserByRoleType = (userRole) => {
    

    const accessToken = Cookies.get('BD-Tech-Solution')
    const { data: users = [], mutate } = useSWR( [`http://localhost:5000/users/all-users?role=${userRole}`, accessToken], ([url, accessToken]) => fetcher(url, accessToken))
    return { users };
};

export default useUserByRoleType;