import React, { forwardRef } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const HackathonAndCompetition = forwardRef<HTMLDivElement>((props, ref) => {
    const hackathons = [
        'Hackathon 1',
        'Hackathon 2',
        'Competition 1'
    ];

  return (
    <div ref={ref}>
        <Box>
            <Typography variant="h4" color="primary">Hackathon & Competitions</Typography>
            <List>
                {hackathons.map(event => (
                <ListItem key={event}>
                    <ListItemText primary={event} />
                </ListItem>
                ))}
            </List>
        </Box>
    </div>
  );
});

export default HackathonAndCompetition;
