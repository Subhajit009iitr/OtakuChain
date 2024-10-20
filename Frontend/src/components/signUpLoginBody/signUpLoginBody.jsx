import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../assets/Initials.png';
import SignUpLogin from '../../dynamic/singuplogin';
import dynamiclogo from "../../assets/dynamiclogo.jpg"
// import worldcoinlogo from "../../assets/worldcoinlogo.jpg"
// import UserVerify from '../../worldcoin/userverify';

function Login() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#0a0a23', // Dark background
            }}
        >
            <img
                src={Logo}
                alt="Logo"
                style={{ width: '80px', marginBottom: '1rem'}}
            />
            <span style={{
                color: 'rgba(256,256,256,1)',
                marginBottom: '1rem'
            }}>
                OtakuChain
            </span>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    backgroundColor: '#1b1b3a',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                    width: '500px',
                }}
            >
                <Typography

                    sx={{
                        color: '#fff', marginBottom: '1rem', fontWeight: 'bold',
                        fontSize: '20px',
                        display: 'flex', alignItems: 'center', justifyItems: 'center'

                    }}
                >

                    <SignUpLogin /> <span style={{ marginLeft: '10px', marginRight: '10px' }}>With</span>
                    <img src={dynamiclogo} alt="dynamiclogo"
                        style={{
                            width: '180px',
                            height: '100%',
                            borderRadius: '10px' 
                        }} />


                </Typography>
                {/* <Typography

                    sx={{
                        color: '#808080', marginBottom: '1rem', fontWeight: 'bold',
                        fontSize: '20px',
                        display: 'flex', alignItems: 'center', justifyItems: 'center'

                    }}
                >
                    And
                </Typography> */}
                <Typography

                    sx={{
                        color: '#fff', marginBottom: '1rem', fontWeight: 'bold',
                        fontSize: '20px',
                        display: 'flex', alignItems: 'center', justifyItems: 'center'

                    }}
                >
                  {/* <span style={{marginRight: '10px'}}>
                     Verify with </span> */}
                     {/* <UserVerify/> */}
                      {/* <img src={worldcoinlogo} alt="worldcoinlogo"
                   style={{
                    width: '180px',
                    height: '100%',
                    borderRadius: '10px' 
                }}
                   /> */}
                </Typography>

            </Box>

        </Box>
    );
}

export default Login;
