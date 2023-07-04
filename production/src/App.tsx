// src/App.tsx

import React from 'react';
import { Box, Container } from '@mui/material';
import EducationSection from './sections/Education';
import TechnicalSkillSection from './sections/TechnicalSkill';
import WorkExperienceSection from './sections/WorkExperience';
import HackathonAndCompetitionSection from './sections/HackathonAndCompetition';
import RelevantProjectSection from './sections/RelevantProject';

const App = () => {
  return (
    <Container>
      <Box mt={4}>
        {/* Include the sections here */}
        <EducationSection />
        <TechnicalSkillSection />
        <WorkExperienceSection />
        <HackathonAndCompetitionSection />
        <RelevantProjectSection />
        {/* Add more sections as needed */}
      </Box>
    </Container>
  );
};

export default App;
