import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '190px', height: '150px', margin: '-120px -35px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#ffffff', borderBottom: '3px solid #000000', margin: '40px -30px' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#ffffff', margin: '40px 40px'  }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;