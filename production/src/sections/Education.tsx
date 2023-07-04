import React from 'react';
import { Box, Typography } from '@mui/material';

const EducationSection = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary">Education</Typography>
      <Box>
        {/* Add your educational details here */}
        <Typography variant="body1">Your University/School Name</Typography>
        <Typography variant="body2">Degree - Year</Typography>
        {/* Add more education details if needed */}
      </Box>
    </Box>
  );
};

export default EducationSection;
