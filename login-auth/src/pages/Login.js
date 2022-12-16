import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkUserAuth } from '../middleware/middleware';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();
    const permission = useSelector(state => state.userData.permission)

    useEffect(() => {
        if (permission) { navigate('/account/user') }
    }, [permission]) // eslint-disable-line react-hooks/exhaustive-deps

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/auth/login", {
            email,
            password
        }).then((response) => {
            localStorage.setItem("login", JSON.stringify({
                userLogin: true,
                token: response.data.access_token
            }))
            setError("");
            setEmail("");
            setPassword("");
            checkUserAuth()
            navigate("/account/user");
        }).catch((error) => {
            localStorage.removeItem("login");
            setError(error.response.data.message);
        })
    }

    return (
        <div style={{ marginTop: "100px" }}>
            <form className='flex-column align-items' onSubmit={login}>
                <h2>Enter your details below</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input
                    id="username"
                    placeholder="Username"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    id="password"
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="w-100" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;