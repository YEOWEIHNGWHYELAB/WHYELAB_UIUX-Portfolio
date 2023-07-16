import React, { forwardRef } from 'react';
import { Box, Typography, Grid, LinearProgress } from '@mui/material';

const TechnicalSkill = forwardRef<HTMLDivElement>((props, ref) => {
    const technicalSkills = [
        { name: 'JavaScript', percentage: 90 },
        { name: 'TypeScript', percentage: 85 },
        { name: 'React', percentage: 95 },
        { name: 'HTML', percentage: 80 },
        { name: 'CSS', percentage: 75 },
        { name: 'UI/UX Design', percentage: 70 },
        // Add more technical skills here
    ];

    return (
        <div ref={ref}>
            <Box>
                <Typography variant="h4" color="primary">Technical Skills</Typography>

                <Grid container spacing={2}>

                {technicalSkills.map(skill => (
                    <Grid item xs={12} sm={6} md={4} key={skill.name}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>{skill.name}</Typography>
                        <Box sx={{ width: '100%', ml: 1 }}>
                            <LinearProgress variant="determinate" value={skill.percentage} />
                        </Box>
                    </Box>
                    </Grid>
                ))}

                </Grid>
            </Box>
        </div>
    );
});

export default TechnicalSkill;
