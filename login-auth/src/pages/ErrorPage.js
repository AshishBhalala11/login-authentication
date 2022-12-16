import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="mt-100 flex-column align-items">
            <h2 style={{ color: "red" }}>404! Page not Found for this address</h2>
            <h3>
                <Link to="/account/login">Click here</Link> to go to login page
            </h3>
        </div>
    )
}

export default ErrorPage;