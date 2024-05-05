import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="50px" bgcolor="#FFF3F4">
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '250px', height: '201px' }} />
    </Stack>
    <Typography variant="h1" sx={{ fontSize: { lg: '18px', xs: '20px' } }} mt="11px" textAlign="center" pb="40px">Made with ❤️ by Dixit Thakor</Typography>
  </Box>
);

export default Footer;