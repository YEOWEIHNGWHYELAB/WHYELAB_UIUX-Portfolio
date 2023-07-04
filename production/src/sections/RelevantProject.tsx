import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const RelevantProject = () => {
  return (
    <Box>
        <Typography variant="h4" color="primary">
            Relevant Projects
        </Typography>

        <br/>

        <Card
            style={{
                backgroundColor: '#c2c2c2'
            }}
        >
            <CardContent
                style={{ 
                    backgroundColor: 'red',
                    border: 'blue 3px solid',
                    maxWidth: '50%'
                }}
            >
                <Typography variant="h6">Project Name</Typography>
                <Typography variant="body2">Description of the project</Typography>
                <Typography variant="body2">Technologies used: React, TypeScript, etc.</Typography>
            </CardContent>
        </Card>

        <br/>

        <Card
            style={{
                backgroundColor: '#c2c2c2'
            }}
        >
            <CardContent
                style={{ 
                    backgroundColor: 'red',
                    border: 'blue 3px solid',
                    maxWidth: '50%'
                }}
            >
                <Typography variant="h6">Project Name</Typography>
                <Typography variant="body2">Description of the project</Typography>
                <Typography variant="body2">Technologies used: React, TypeScript, etc.</Typography>
            </CardContent>
        </Card>
    </Box>
  );
};

export default RelevantProject;
