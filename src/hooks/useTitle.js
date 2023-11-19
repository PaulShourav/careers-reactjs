import { useEffect } from "react";


const useTitle = (customTitle) => {
    useEffect(()=>{
        document.title='BD-Tech Solution-'+customTitle || 'BD-Tech Solution'
    },[customTitle])
};

export default useTitle;