import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddAirport() {
    return (
        <div>

            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField label="Airpoer " variant="filled" color="success" focused /><br />

                    <Button variant="contained">Add</Button>

                </Box>
            </div>

        </div>
    )
}
