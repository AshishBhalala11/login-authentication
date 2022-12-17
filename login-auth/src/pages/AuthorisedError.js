import React from "react";

function AuthorisedError({isLoading, permission}) {
    return (
        <div className="mt-100 flex-column align-items">
            {!permission && !isLoading && (
                <>
                    <h2>You are not Authorised to view this page</h2>
                    <h3>Redirecting to home page shortly</h3>
                </>
            )}
        </div>
    )
}

export default AuthorisedError;