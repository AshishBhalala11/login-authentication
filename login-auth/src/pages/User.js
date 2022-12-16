import React from 'react';
import { useSelector } from 'react-redux';
import Logout from '../button/Logout';
import Loader from '../component/loader';

const User = () => {
  const isLoading = useSelector(state => state.userData.isLoading)
  const permission = useSelector(state => state.userData.permission)

  return (
    <div>
      <div className="mt-100 flex-column align-items">
        {!permission && isLoading ? (
          <>
            <h2>You are not Authorised to view this page</h2>
            <h3>Redirecting to home page shortly</h3>
          </>
        ) : <>
          <h2>Welcome Back User!</h2>
          <h3>You have logged in successfully</h3>
        </>}
        {isLoading && (<Loader />)}
        {permission && !isLoading && <Logout />}
      </div>
    </div>
  )
}

export default User;