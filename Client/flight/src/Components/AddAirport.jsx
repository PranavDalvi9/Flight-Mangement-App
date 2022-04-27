import React, { useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function AddAirport() {
    const [airport, setAirport] = useState("")
    
    const onAdd =() => {
        axios.post("http://localhost:8080/Airports", {airport}).then((res) => console.log(res.data))
    }

    return (
        <div>

            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '75ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField label="ADD AIRPORT " variant="filled" color="success" focused onChange={(e)=> setAirport(e.target.value) } /><br />

                    <Button variant="contained" onClick={onAdd}>Add</Button>

                </Box>
            </div>

        </div>
    )
}
