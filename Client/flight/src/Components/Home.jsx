import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function Home() {

    const [name, setName] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        console.log(event.target.value)
    };

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
                        onChange={handleChange}
                    /><br />

                    <TextField
                        id="outlined-name"
                        label="TO"
                        // value={name}
                        onChange={handleChange}
                    /><br/>

                    <Button variant="contained">Search</Button>
                </Box>
            </div>
        </div>
    )
}
