import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-full"></progress>;
    }
    if (!user) {
        return <Navigate to='/login' replace={true}></Navigate>;
    }
    if (user) {
        return <>{children}</>
    }
};

export default PrivateRoute;