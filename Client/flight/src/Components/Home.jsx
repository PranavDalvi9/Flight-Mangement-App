import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function Home() {

    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');


    return (
        <div>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '85ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-name"
                        label="FROM"
                        // value={name}
                        onChange={(e)=> {setFrom(e.target.value)}}
                    /><br />

                    <TextField
                        id="outlined-name"
                        label="TO"
                        // value={name}
                        onChange={(e)=> {setTo(e.target.value)}}
                    /><br/>

                    <Button variant="contained">Search</Button>
                </Box>
            </div>
        </div>
    )
}
