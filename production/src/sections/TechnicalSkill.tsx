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
    ];

    return (
        <div ref={ref}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" color="primary">Technical Skills</Typography>
            </Box>
                
                <Grid container spacing={10}>
                {technicalSkills.map(skill => (
                    <Grid item xs={12} sm={6} md={4} key={skill.name}>
                    <Box
                        sx={{
                            backgroundColor: 'green',
                            p: 2,
                            borderRadius: 8,
                            textAlign: 'center',
                            color: 'white',
                        }}
                    >
                        <Typography variant="h6">{skill.name}</Typography>
                        <Box sx={{ mt: 1 }}>
                        <LinearProgress
                            variant="determinate"
                            value={skill.percentage}
                            sx={{
                                backgroundColor: 'grey',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'blue'
                                }
                            }}
                        />
                        </Box>
                    </Box>
                    </Grid>
                ))}
                </Grid>
        </div>
    );
});

export default TechnicalSkill;
