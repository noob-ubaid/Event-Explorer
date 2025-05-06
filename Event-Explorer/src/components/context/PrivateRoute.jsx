import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    
        const {user , loading} = use(AuthContext)
        if(loading){
            return <div className='w-full h-screen flex items-center justify-center'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        }
        if(user && user?.email){
            return children
        }
        else{
            return <Navigate to='/login'></Navigate>
        }
   
};

export default PrivateRoute;