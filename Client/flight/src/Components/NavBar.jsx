import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { logout } from '../Redux/Login/Action';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
    const dispatch = useDispatch()

    const auth = useSelector((store) => store.login.isAuthenticate)
    console.log("isasuth", auth)
    const navigate = useNavigate()
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>

            <div className='navBarDiv'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList className='navBarDiv' onChange={handleChange} >
                                <Tab label="Home" value="1" onClick={() => navigate("/")} />

                                {auth ? (
                                    <>
                                        <Tab label="Add Flight" value="2" onClick={() => navigate("/addFlight")} />

                                        <Tab label="Add Airport" value="3" onClick={() => navigate("/addAirport")} />

                                        <Tab label="Log Out" disabled={!auth} value="8" onClick={() => { dispatch(logout()); navigate("/login") }} />

                                    </>
                                ) : <Tab label="Login" disabled={auth} value="4" onClick={() => navigate("/login")} />}

                            </TabList>
                        </Box>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}
