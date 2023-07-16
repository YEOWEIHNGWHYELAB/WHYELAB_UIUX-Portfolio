import React, { forwardRef } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function getRandomDarkColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 5)];
    }

  return color;
}

const RelevantProject = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
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
                        backgroundColor: getRandomDarkColor(),
                        border: 'white 3px solid',
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
                        backgroundColor: getRandomDarkColor(),
                        border: 'white 3px solid',
                    }}
                >
                    <Typography variant="h6">Project Name</Typography>
                    <Typography variant="body2">Description of the project</Typography>
                    <Typography variant="body2">Technologies used: React, TypeScript, etc.</Typography>
                </CardContent>
            </Card>
        </Box>
    </div>
  );
});

export default RelevantProject;
