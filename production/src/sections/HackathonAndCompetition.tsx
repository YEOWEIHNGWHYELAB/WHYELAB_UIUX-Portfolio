import React, { forwardRef, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import '../styling/HackathonAndCompetition.css'; // Import CSS file for animation styles

const HackathonAndCompetition = forwardRef<HTMLDivElement>((props, ref) => {
    const hackathons = [
        { title: 'Hackathon 1', description: 'Description 1' },
        { title: 'Hackathon 2', description: 'Description 2' },
        { title: 'Competition 1', description: 'Description 3' }
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
                <Typography variant="h4" color="primary">Hackathons & Competitions</Typography>
                <List>
                    {hackathons.map((event, index) => (
                        <ListItem key={event.title} className="list-component">
                            <ListItemText
                                primary={event.title}
                                secondary={event.description}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    );
});

export default HackathonAndCompetition;
