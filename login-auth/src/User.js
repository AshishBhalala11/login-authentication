import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const isLoginAuthenticated = JSON.parse(localStorage.getItem("login"));

    const userNotLoggedin = () => (
        <>
            <h2>It seem's like you are not logged in</h2>
            <h3>
                If you have an account, then please <Link to="/account/login">Login</Link>
            </h3>
        </>
    );

    return (
        <div className="m-100 flex-column align-items">
            {isLoginAuthenticated && isLoginAuthenticated.userLogin ? (
                <>
                    <h2>Welcome Back User!</h2>
                    <h3>You have logged in successfully</h3>
                </>
            ) : (
                <>{userNotLoggedin()}</>
            )}
        </div>
    )
}

export default User;