import { Box, Stack, Typography } from "@mui/material";
import { Pagination } from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return <Box sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
   <Typography variant="h3" mb="46px">
    Showing Result
   </Typography>
   <Stack direction="row" 
   sx={{ gap: { lg: '110px', xs: '50px'}}}
   >
   
   </Stack>
  </Box>;
};

export default Exercises;
