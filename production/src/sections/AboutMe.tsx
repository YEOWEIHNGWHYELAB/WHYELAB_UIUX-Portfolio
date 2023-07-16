import React, { forwardRef } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
                    I am <span style={{ color: 'red' }}>YEO WEI HNG</span>, a final year Computer Engineering Undergraduate @NUS
                </Typography>

                <br/>
                <div 
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Stack direction="row">
                        <IconButton 
                            href={"https://github.com/YEOWEIHNGWHYELAB"} 
                            target="_blank"
                            style={{ padding: '12px' }}
                        >
                            <GitHub  style={{ fontSize: '4rem' }} />
                        </IconButton>
                        <IconButton 
                            href={"https://www.linkedin.com/in/yeo-wei-hng/"} 
                            target="_blank"
                            style={{ padding: '12px' }}
                        >
                            <LinkedInIcon style={{ fontSize: '4rem' }} />
                        </IconButton>
                        <IconButton 
                            href={"https://www.youtube.com/@WHYELAB/"} 
                            target="_blank"
                            style={{ padding: '12px' }}
                        >
                            <YouTubeIcon style={{ fontSize: '4rem' }} />
                        </IconButton>
                        <IconButton 
                            href={"https://docs.google.com/document/d/1DSQR4uLtwMjjSeLXZhUCq2UGAH-gTtxo/edit?usp=sharing&ouid=116482923554621042379&rtpof=true&sd=true"} 
                            target="_blank"
                            style={{ padding: '12px' }}
                        >
                            <AccountBoxIcon style={{ fontSize: '4rem' }} />
                        </IconButton>
                    </Stack>
                </div>
            </div>
        </div>
    );
});

export default AboutMe;
