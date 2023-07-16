import React, { useRef } from 'react';
import theme from './styling/GlobalTheme';
import {
  Box,
  Container,
  CssBaseline,
  Button,
  ThemeProvider,
} from '@mui/material';
import EducationSection from './sections/Education';
import TechnicalSkillSection from './sections/TechnicalSkill';
import WorkExperienceSection from './sections/WorkExperience';
import HackathonAndCompetitionSection from './sections/HackathonAndCompetition';
import RelevantProjectSection from './sections/RelevantProject';

const App: React.FC = () => {
    const educationRef = useRef<HTMLDivElement>(null);
    const workExperienceRef = useRef<HTMLDivElement>(null);
    const hackathonRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const currentYear = new Date().getFullYear();

    const headerHeight = 64;

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const scrollOffset = ref.current.offsetTop - headerHeight;
            window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Box 
                    position="fixed" 
                    top={0} 
                    left={0} 
                    width="100%" 
                    height={headerHeight} 
                    zIndex={1} 
                    display='flex' 
                    bgcolor="grey" 
                    justifyContent='center' 
                    alignItems='center'
                >
                    <header >
                        <Button onClick={() => scrollToSection(educationRef)}>
                            Education
                        </Button>
                        <Button onClick={() => scrollToSection(workExperienceRef)}>
                            Work Experience
                        </Button>
                        <Button onClick={() => scrollToSection(hackathonRef)}>
                            Hackathons and Competitions
                        </Button>
                        <Button onClick={() => scrollToSection(projectRef)}>
                            Relevant Projects
                        </Button>
                        <Button onClick={() => scrollToSection(skillRef)}>
                            Technical Skills
                        </Button>
                    </header>
                </Box>

                <Box marginTop={12}>
                    <Box marginBottom={9}>
                        <EducationSection ref={educationRef} />
                    </Box>
                    <Box marginBottom={9}>
                        <WorkExperienceSection ref={workExperienceRef} />
                    </Box>
                    <Box marginBottom={9}>
                        <HackathonAndCompetitionSection ref={hackathonRef} />
                    </Box>
                    <Box marginBottom={9}>
                        <RelevantProjectSection ref={projectRef} />
                    </Box>
                    <Box marginBottom={9}>
                        <TechnicalSkillSection ref={skillRef} />
                    </Box>
                </Box>
            </Container>

            <Box 
                width="100%"
                height={64}
                sx={{ backgroundColor: '#2196f3', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }} 
            >
                <footer> 
                    <p>&copy; {currentYear} Yeo Wei Hng. All rights reserved.</p>
                </footer>
            </Box>
        </ThemeProvider>
    );
};

export default App;
