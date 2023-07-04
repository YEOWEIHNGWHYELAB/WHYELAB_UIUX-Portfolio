import React from 'react';
import { Box, Typography } from '@mui/material';

const WorkExperience = () => {
    return (
        <Box>
            <Typography variant="h4" color="primary">Work Experience</Typography>
            <Box>
                <Typography variant="body1">Company Name</Typography>
                <Typography variant="body2">Job Title - Date</Typography>
                <Typography variant="body2">Description of your role and responsibilities</Typography>
            </Box>
        </Box>
    );
};

export default WorkExperience;
