import useSWR from "swr";


const getUserByRoleType = (userRole) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data: users=[] ,mutate  } = useSWR(`http://localhost:5000/users/all-admin-users?role=${userRole}`, fetcher);
    return {users,mutate}
};

export default getUserByRoleType;