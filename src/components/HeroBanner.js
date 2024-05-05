import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../App.css'
import HeroBannerImage from '../assets/images/banner.jpeg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontFamily='Orbitron'  fontWeight="600" fontSize="36px" marginTop="-150px">Fitness Club</Typography>
    <Typography fontWeight={700} fontFamily='Poetsen One'  color="#ffffff" sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" color="#ffffff" >
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" 
      style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={1000} fontFamily='Merienda'  color="#000000" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '270px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;