import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import axios from 'axios';

export default function Home() {

    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const[data, setData] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:8080/Flights").then((res) => setData(res.data))
    },[])

    const handleSearch = () => {
        const disp = data.filter((e) => {
            // console.log("eee",e)
            if((from === e.from) && (to === e.to)){
                return e
            }
        })
        console.log("disp",disp)
    }


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

                    <Button variant="contained" onClick={handleSearch}>Search</Button>
                </Box>
            </div>

            <div>
                
            </div>
        </div>
    )
}
