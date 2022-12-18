import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Logout from '../button/Logout';
import AuthorisedError from './AuthorisedError';
import Loader from '../component/loader';
import { checkUserAuth } from '../middleware/middleware';


const User = () => {
  const isLoading = useSelector(state => state.userData.isLoading);
  const permission = useSelector(state => state.userData.permission);

  useEffect(() => {
    if (!permission) {
      checkUserAuth();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="mt-100 flex-column align-items">
        {!permission && <AuthorisedError isLoading={isLoading} permission={permission} />}
        {isLoading && <Loader />}
        {permission && !isLoading &&
          <>
            <h2>Welcome Back User!</h2>
            <h3>You have logged in successfully</h3>
          </>}
        {permission && !isLoading && <Logout />}
      </div>
    </div>
  )
}

export default User;