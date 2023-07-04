import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const TechnicalSkill = () => {
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
  );
};

export default TechnicalSkill;
