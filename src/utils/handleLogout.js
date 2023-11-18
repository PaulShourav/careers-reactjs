import useAuth from "../hooks/useAuth"


const handleLogout = () => {
     logout()
        .then(() => {
            // localStorage.removeItem('careers-access-token')
        })
        .catch((error) => console.log(error))
};

export default handleLogout;
