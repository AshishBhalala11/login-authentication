import React from "react";
import { Store } from "../store/configureStore";
import { removeLocalStorageData } from '../middleware/middleware';

function Logout() {
    const onLogout = () => {
        removeLocalStorageData();
        Store.dispatch({ type: 'SET_PERMISSION', payload: false });
        Store.dispatch({ type: 'SET_LOADING', payload: true });
        window.location.href = "/account/login";
    }

    return (
        <div>
            <button className="w-100 btn-logout" onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Logout;