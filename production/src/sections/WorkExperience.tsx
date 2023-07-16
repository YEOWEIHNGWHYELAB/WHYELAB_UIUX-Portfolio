import React, { forwardRef, useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const WorkExperience = forwardRef<HTMLDivElement>((props, ref) => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const experienceSection = document.getElementById('experience-section');

            if (experienceSection) {
                const rect = experienceSection.getBoundingClientRect();
                setShowAnimation(rect.top <= window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const experiences = [
        {
            company: 'Company A',
            title: 'Job Title A',
            date: 'Date A',
            description: 'Description of Job A',
        },
        {
            company: 'Company B',
            title: 'Job Title B',
            date: 'Date B',
            description: 'Description of Job B',
        },
    ];

    return (
        <div ref={ref}>
            <Box id="experience-section">
                <Typography variant="h4" color="primary" sx={{ marginBottom: '1rem' }}>Work Experience</Typography>
                <div 
                    style={{
                        overflowX: 'hidden'
                    }}
                >
                    {experiences.map((experience, index) => (
                        <Card
                            key={index}
                            sx={{
                                backgroundColor: '#002222',
                                marginBottom: '1rem',
                                marginLeft: showAnimation && index % 2 === 0 ? '0' : 'auto', // Align left for even indices
                                marginRight: showAnimation && index % 2 === 1 ? '0' : 'auto', // Align right for odd indices
                                transform: showAnimation ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '-100%' : '100%'})`, // Slide in from left/right
                                transition: 'transform 0.5s ease',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6">{experience.company}</Typography>
                                <Typography variant="body1">{experience.title}</Typography>
                                <Typography variant="body2">{experience.date}</Typography>
                                <Typography variant="body2">{experience.description}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Box>
        </div>
    );
});

export default WorkExperience;
