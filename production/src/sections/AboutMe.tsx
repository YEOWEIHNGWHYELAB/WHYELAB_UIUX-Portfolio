import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';

import profileImage from '../profile.jpg';

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem'
            }}
        >
            <div>
                <img 
                    src={profileImage} 
                    alt="Profile"
                    style={{
                        width: '20vw',
                        borderRadius: '50%'
                    }}
                />
            </div>
            <div>
                <Typography variant="h2" component="h2">
                    Hi there 👋
                </Typography>
                <Typography variant="body1">
                    I am a final year Computer Engineering Undergraduate @NUS
                </Typography>
            </div>
        </div>
    );
});

export default AboutMe;
