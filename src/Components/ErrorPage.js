import React from 'react';
import { Stack, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <Stack direction='column' sx={{width:'100vw',height:'100vh',background:'white',alignItems:"center",justifyContent:"flex-start"}}>
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg?w=700"  alt="" />
        <Typography variant='h3' sx={{color:'black'}}>There seems to be an error </Typography>
        <Typography variant='h5'><Link to={'/home'}>Go Back To Home</Link></Typography>
    </Stack>
  );
}
