import React, { useContext } from 'react';
import { AuthContext } from '../../Pages/contexts/AuthProvider';
import {Circles } from "react-loader-spinner";
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
          <div className='flex h-screen justify-center items-center'>
            <Circles
              height="100"
              width="100"
              color="#fcc603"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        );
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;