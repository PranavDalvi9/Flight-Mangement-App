import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { postFlight } from '../Redux/Flights/Action';

export default function AddFlight() {
    const dispatch = useDispatch()
    const [airlines, setAirlines] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [cost, setCost] = useState("");
    const [FromTime, setFromTime] = useState("");
    const [ToTime, setToTime] = useState("");
    const [capacity, setCapacity] = useState("");

    const handleAdd = () => {
        const data = {
            airlines,
            from,
            to,
            cost,
            FromTime,
            ToTime,
            pnr: Math.floor(Math.random() * 1000000000000),
            capacity
        }

        dispatch(postFlight(data))

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

                    <TextField label="AIRLINES NAME " variant="filled" color="success" focused onChange={(e) => setAirlines(e.target.value)} /><br />

                    <TextField label="AIRPORT FROM" variant="filled" color="success" focused onChange={(e) => setFrom(e.target.value)} /><br />

                    <TextField label="AIRPORT TO" variant="filled" color="success" focused onChange={(e) => setTo(e.target.value)} /><br />

                    <TextField label="COST" variant="filled" color="success" focused onChange={(e) => setCost(e.target.value)} /><br />

                    <TextField label="FROM TIME" variant="filled" color="success" focused onChange={(e) => setFromTime(e.target.value)} /><br />

                    <TextField label="TO TIME" variant="filled" color="success" focused onChange={(e) => setToTime(e.target.value)} /><br />

                    <TextField label="CAPACITY" variant="filled" color="success" focused onChange={(e) => setCapacity(e.target.value)} /><br />

                    <Button variant="contained" onClick={handleAdd}>ADD</Button>

                </Box>
            </div>



        </div>
    )
}
