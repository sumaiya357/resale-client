import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='max-w-5xl mx-auto text-center'><button className="btn btn-square loading text-center"></button></div>
    }

    //showing category/:id page if user is logged in
    if(user){
        return children;
    }

    //redirecting to login page if user not found
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};
export default PrivateRoute;