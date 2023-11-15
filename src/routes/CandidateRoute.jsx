import React from 'react';
import useCandidateUser from '../hooks/useCandidateUser';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loading from '../components/common/Loading';

const CandidateRoute = () => {
    const {candidateUser,isCandidateLoading}=useCandidateUser()
    const {user}=useAuth()
    const location=useLocation()

    if (isCandidateLoading) {
        return <Loading/>
    }
    if(user && candidateUser){
        return children
    }
    return <Navigate to={'/'} state={{from:location}} replace></Navigate>
};

export default CandidateRoute;