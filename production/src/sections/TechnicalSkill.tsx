import React, { forwardRef } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const TechnicalSkill = forwardRef<HTMLDivElement>((props, ref) => {
    const technicalSkills = [
        'JavaScript',
        'TypeScript',
        'React',
        'HTML',
        'CSS',
        'UI/UX Design',
        // Add more technical skills here
    ];

    return (
        <div ref={ref}>
            <Box>
                <Typography variant="h4" color="primary">Technical Skills</Typography>
                <List>
                    {technicalSkills.map(skill => (
                        <ListItem key={skill}>
                            <ListItemText primary={skill} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    );
});

export default TechnicalSkill;
