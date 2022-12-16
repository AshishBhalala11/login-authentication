import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Loader from './loader';

const token = JSON.parse(localStorage.getItem("login")).token;

function Post() {
    const [userPermission, setUserPermission] = useState(false);
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8000/api/auth/token",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then((response) => {
                if (response.status === 200) {
                    setUserPermission(true);
                }
                setLoading(false);
            }).catch((error) => {
                setUserPermission(false);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
                setLoading(false);
            })
    }, [])
    return (
        <div className="m-100 flex-column align-items">
            {loading && (<Loader />)}
            {!userPermission && !loading && (
                <>
                    <h2>You are not Authorised to view this page</h2>
                    <h3>Redirecting to home page shortly</h3>
                </>
            )}
            {userPermission && !loading && (
                <>
                    <h2>This is post page</h2>
                </>
            )}
        </div>
    );
}

export default Post;
