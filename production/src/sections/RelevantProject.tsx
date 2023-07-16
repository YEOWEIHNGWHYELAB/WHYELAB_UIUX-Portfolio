import React, { forwardRef } from 'react';
import { Box, Card, CardContent, IconButton, Link, Typography  } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import DevPostIcon from '../devpost-logo.png';

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
                    <Typography variant="h6">2D Self Driving Car Game</Typography>
                    <IconButton 
                        href="https://github.com/YEOWEIHNGWHYELAB/GameStatTracker" 
                        target="_blank"
                    >
                        <GitHub />
                    </IconButton>
                    <Typography variant="body2">
                        Technologies used: Django, PostgreSQL, ReactJS
                    </Typography>
                    <br/>
                    <Typography variant="body2">
                        A full stack application that allows users to track their game statistics. Users can create an account, add games, and add game session 
                        data such as the score of the game. The application also allows the user to view their games played in the form of a pie chart.
                    </Typography>
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
                    <Typography variant="h6">2D Self Driving Car Game</Typography>
                    <IconButton 
                        href="https://github.com/YEOWEIHNGWHYELAB/2D-Self-Driving-Car-Python3" 
                        target="_blank"
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton 
                        href="https://devpost.com/software/2d-self-driving-car"
                        target="_blank"
                        style={{
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                         }}
                    >
                        <Link color="inherit" underline="none">
                            <img
                                src={DevPostIcon}
                                alt="DevPost"
                                style={{ width: '24px', height: '24px', verticalAlign: 'middle' }}
                            />
                        </Link>
                    </IconButton>
                    <Typography variant="body2">
                        Technologies used: PyGame, PyTorch
                    </Typography>
                    <br/>
                    <Typography variant="body2">
                        2D self driving car that uses a reinforcement learning with experience replay algorithm to learn how to drive and avoid obstacles. 
                        Obstacles can be drawn onto the screen and deleted from the screen. After training, the brain can be saved and be loaded for future
                        usage.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </div>
  );
});

export default RelevantProject;
