import React, { useRef } from 'react';
import theme from './styling/GlobalTheme';
import { Box, Button, Container, CssBaseline, ThemeProvider } from '@mui/material';
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

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <header>
                    <Box position="fixed" display="flex" justifyContent="space-between">
                        <div>
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
                        </div>
                    </Box>
                </header>
                <Box mt={4}>
                    <EducationSection ref={educationRef} />
                    <WorkExperienceSection ref={workExperienceRef} />
                    <HackathonAndCompetitionSection  ref={hackathonRef} />
                    <RelevantProjectSection ref={projectRef} />
                    <TechnicalSkillSection  ref={skillRef} />
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default App;
