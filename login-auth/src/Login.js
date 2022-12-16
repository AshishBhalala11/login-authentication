import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

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
            navigate("/account/user");
        }).catch((error) => {
            localStorage.removeItem("login");
            setError(error.response.data.message);
        })
    }
    return (
        <div style={{ marginTop: "100px" }}>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' }, }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                noValidate
                autoComplete="off"
                onSubmit={login}>

                <h2>Login Page</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <TextField
                    id="username"
                    label="Username"
                    variant='filled'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <TextField
                    id="password"
                    label="Password"
                    variant='filled'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button style={{ width: "100px" }} variant="contained" color="primary" type="submit">Login</Button>
            </Box>
        </div>
    )
}

export default Login;