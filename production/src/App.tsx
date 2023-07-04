import theme from './styling/GlobalTheme'; // Import the dark theme
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import EducationSection from './sections/Education';
import TechnicalSkillSection from './sections/TechnicalSkill';
import WorkExperienceSection from './sections/WorkExperience';
import HackathonAndCompetitionSection from './sections/HackathonAndCompetition';
import RelevantProjectSection from './sections/RelevantProject';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Box mt={4}>
                    <EducationSection />
                    <TechnicalSkillSection />
                    <WorkExperienceSection />
                    <HackathonAndCompetitionSection />
                    <RelevantProjectSection />
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default App;
