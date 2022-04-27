import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Home() {

    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [data, setData] = useState([])
    const [disp , setDisp] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/Flights").then((res) => setData(res.data))
    }, [])

    const handleSearch = () => {
        const disp1 = data.filter((e) => {
            // console.log("eee",e)
            if ((from == e.from) && (to == e.to)) {
                return e
            }
        })
        setDisp(disp1)
        console.log("disp", disp1)
        console.log("apend",disp)
    }


    return (
        <div>
            <div>
                {/* <button>Login</button> */}
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
                        onChange={(e) => { setFrom(e.target.value) }}
                    /><br />

                    <TextField
                        id="outlined-name"
                        label="TO"
                        // value={name}
                        onChange={(e) => { setTo(e.target.value) }}
                    /><br />

                    <Button variant="contained" onClick={handleSearch}>Search</Button>
                </Box>
            </div>

            <div>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Cost</th>
                        <th>From Time</th>
                        <th>To Time</th>
                        <th>PNR</th>
                        <th>Capacity</th>
                    </tr>

                    {
                        disp.map((e) => (
                            <tr>
                        <td>{e.airlines}</td>
                        <td>{e.from}</td>
                        <td>{e.to}</td>
                        <td>{e.cost}</td>
                        <td>{e.FromTime}</td>
                        <td>{e.ToTime}</td>
                        <td>{e.pnr}</td>
                        <td>{e.capacity}</td>
                    </tr>
                        ))
                    }

                    
                    
                </table>
            </div>
            
        </div>
    )
}
