import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const RelevantProject = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary">Relevant Projects</Typography>
      <Card>
        <CardContent>
          {/* Add information about your relevant projects here */}
          <Typography variant="h6">Project Name</Typography>
          <Typography variant="body2">Description of the project</Typography>
          <Typography variant="body2">Technologies used: React, TypeScript, etc.</Typography>
          {/* Add more project details if needed */}
        </CardContent>

        <CardContent>
            {/* Add information about your relevant projects here */}
            <Typography variant="h6">Project Name</Typography>
            <Typography variant="body2">Description of the project</Typography>
            <Typography variant="body2">Technologies used: React, TypeScript, etc.</Typography>
            {/* Add more project details if needed */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default RelevantProject;
