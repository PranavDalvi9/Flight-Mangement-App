import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddFlight() {
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

                    <TextField label="AIRLINES NAME " variant="filled" color="success" focused /><br />

                    <TextField label="AIRPORT FROM" variant="filled" color="success" focused /><br />

                    <TextField label="AIRPORT TO" variant="filled" color="success" focused /><br />

                    <TextField label="COST" variant="filled" color="success" focused /><br />

                    <TextField label="FROM TIME" variant="filled" color="success" focused /><br />

                    <TextField label="TO TIME" variant="filled" color="success" focused /><br />

                    <TextField label="PNR " variant="filled" color="success" focused /><br />

                    <TextField label="CAPACITY" variant="filled" color="success" focused /><br />

                    <Button variant="contained">Contained</Button>

                </Box>
            </div>



        </div>
    )
}
