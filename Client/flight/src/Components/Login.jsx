import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function Login() {
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

      <TextField label="User Name" variant="filled" color="success" focused />

      <TextField label="Password" variant="filled" color="success" focused /><br/>

      <Button variant="contained">Login</Button>
    
    </Box>
        </div>
      
    </div>
  )
}
