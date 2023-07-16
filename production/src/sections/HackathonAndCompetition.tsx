import React, { forwardRef, useEffect } from 'react';
import { Box, Card, CardContent, IconButton, Link, Typography } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import DevPostIcon from '../devpost-logo.png';
import '../styling/HackathonAndCompetition.css';

const HackathonAndCompetition = forwardRef<HTMLDivElement>((props, ref) => {
    const hackathons = [
        { 
            title: 'Hackathon 1', 
            description: 'Description 1', 
            githubUrl: 'https://github.com/project1', 
            devpostUrl: 'https://devpost.com/project1' 
        },
        { 
            title: 'Hackathon 2', 
            description: 'Description 2', 
            githubUrl: 'https://github.com/project2' 
        },
        { 
            title: 'Competition 1', 
            description: 'Description 3', 
            devpostUrl: 'https://devpost.com/project3' 
        }
    ];

    useEffect(() => {
        const listItems = document.querySelectorAll('.list-component');

        const handleScroll = () => {
            for (let i = 0; i < listItems.length; i++) {
                const listItem = listItems[i];
                const listItemPosition = listItem.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (listItemPosition < windowHeight * 0.9) {
                    listItem.classList.add('fly-in'); // Add fly-in animation class
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={ref}>
            <Box id="hackathonncompetition-section" className="hackathon-section">
                <Typography variant="h3" color="primary" sx={{ marginBottom: '1rem' }}>
                    Hackathons & Competitions
                </Typography>

                {hackathons.map((event, index) => (
                    <Card
                        key={index}
                        sx={{
                            marginBottom: '1rem',
                        }}
                    >
                        <CardContent 
                            className="list-component"
                            style={{ 
                                border: 'white 3px solid'
                            }}
                        >
                            <Typography variant="h4">{event.title}</Typography>

                            {event.githubUrl && (
                                <IconButton href={event.githubUrl} target="_blank">
                                    <GitHub />
                                </IconButton>
                            )}

                            {event.devpostUrl && (
                                <IconButton 
                                    href={event.devpostUrl} 
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
                            )}

                            <Typography variant="body1">{event.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </div>
    );
});

export default HackathonAndCompetition;
