import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '130px', height: '130px', margin: '-100px -10px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#ffffff', borderBottom: '3px solid #000000', margin: '30px -30px' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#ffffff', margin: '30px 50px'  }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;