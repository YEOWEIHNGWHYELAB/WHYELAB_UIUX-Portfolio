import React from 'react';
import { Box, Typography } from '@mui/material';

const Education = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" sx={{ marginBottom: '1rem' }}>Education</Typography>
      <Box sx={{ marginBottom: '1rem' }}>
        {/* Add your educational details here */}
        <Typography variant="body1">National University of Singapore</Typography>
        <Typography variant="body2">Degree - Year</Typography>
        {/* Add more education details if needed */}
      </Box>
    </Box>
  );
};

export default Education;