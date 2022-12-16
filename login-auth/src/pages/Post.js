import { useSelector } from 'react-redux';
import Loader from '../component/loader';
import Logout from "../button/Logout";

const pathName = window.location.pathname;
const postNumber = pathName.substring(pathName.lastIndexOf('/') + 1);

function Post() {
    const isLoading = useSelector(state => state.userData.isLoading)
    const permission = useSelector(state => state.userData.permission)

    return (
        <div className="mt-100 flex-column align-items">
            {!permission && isLoading && (
                <>
                    <h2>You are not Authorised to view this page</h2>
                    <h3>Redirecting to home page shortly</h3>
                </>
            )}
            {isLoading && (<Loader />)}
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
