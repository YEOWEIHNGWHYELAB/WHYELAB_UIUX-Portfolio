import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';

const Education = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref}>
            <Box>
                <Typography variant="h4" color="primary" sx={{ marginBottom: '1rem' }}>Education</Typography>
                <Box sx={{ marginBottom: '1rem' }}>
                    <Typography variant="body1">National University of Singapore</Typography>
                    <Typography variant="body2">Degree - Year</Typography>
                </Box>
            </Box>
        </div>
    );
});

export default Education;