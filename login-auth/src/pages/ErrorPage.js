import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { checkUserAuth } from '../middleware/middleware';

function ErrorPage() {
    const permission = useSelector(state => state.userData.permission);

    useEffect(() => {
        checkUserAuth(false);
    }, []);

    return (
        <div className="mt-100 flex-column align-items">
            <h2 style={{ color: "red" }}>404! Page not Found for this address</h2>
            {!permission &&
                <>

                    <h2> You are not logged in</h2>
                    <h3>
                        <Link to="/account/login">Click here</Link> to go to login page
                    </h3>
                </>
            }
            {permission &&
                <>
                    <h2> You are already logged in</h2>
                    <h3>
                        <Link to="/account/user">Click here</Link> to go to user page
                    </h3>
                </>
            }
        </div>
    )
}

export default ErrorPage;