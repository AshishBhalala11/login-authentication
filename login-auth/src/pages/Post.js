import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Logout from "../button/Logout";
import Loader from '../component/loader';
import AuthorisedError from './AuthorisedError';
import { checkUserAuth } from '../middleware/middleware';


const pathName = window.location.pathname;
const postNumber = pathName.substring(pathName.lastIndexOf('/') + 1);

function Post() {
    const isLoading = useSelector(state => state.userData.isLoading);
    const permission = useSelector(state => state.userData.permission);

    useEffect(() => {
        checkUserAuth();
    }, []);

    return (
        <div className="mt-100 flex-column align-items">
            {!permission && <AuthorisedError isLoading={isLoading} permission={permission} />}
            {isLoading && <Loader />}
            {permission && !isLoading && (
                <>
                    <h2>You are on post number {postNumber}</h2>
                    <h3>You can also create new post here.</h3>
                </>
            )}
            {permission && !isLoading && <Logout />}
        </div>
    );
}

export default Post;
