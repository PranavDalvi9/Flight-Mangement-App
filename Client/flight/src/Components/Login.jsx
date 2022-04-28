import React, { useState } from 'react'
import { login } from "../Redux/Login/Action"
import { Navigate } from 'react-router';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch()
    const { isAuthenticate } = useSelector((store) => store.login)
    console.log(isAuthenticate)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")
    const handleLogin = () => {
        dispatch(login({ username, password }))

    }
    if (isAuthenticate) {
        return <Navigate to={"/"} />
    }


    return (
        <div>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField label="USER NAME" variant="filled" color="success" focused onChange={(e) => setUsername(e.target.value)} /><br />

                    <TextField label="PASSWORD" variant="filled" color="success" focused onChange={(e) => setPassword(e.target.value)} /><br />

                    <Button variant="contained" onClick={handleLogin}>Login</Button>

                </Box>
            </div>

        </div>
    )
}
