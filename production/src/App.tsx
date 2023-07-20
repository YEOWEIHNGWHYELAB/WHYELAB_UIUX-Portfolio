import React, { useEffect, useRef, useState } from "react";
import theme from "./styling/GlobalTheme";
import {
  Box,
  Container,
  CssBaseline,
  Button,
  Stack,
  ThemeProvider,
} from "@mui/material";

import AboutMeSection from "./sections/AboutMe";
import EducationSection from "./sections/Education";
import TechnicalSkillSection from "./sections/TechnicalSkill";
import WorkExperienceSection from "./sections/WorkExperience";
import HackathonAndCompetitionSection from "./sections/HackathonAndCompetition";
import RelevantProjectSection from "./sections/RelevantProject";

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("");

    const aboutMeRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const workExperienceRef = useRef<HTMLDivElement>(null);
    const hackathonRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const currentYear = new Date().getFullYear();

    const headerHeight = 64;
    const photoOffsetHeight = headerHeight + 100;

    useEffect(() => {
        const handleScroll = () => {
            if (skillRef.current && skillRef.current.getBoundingClientRect().top <= photoOffsetHeight) {
                setActiveSection("Technical Skills");
            } else if (projectRef.current && projectRef.current.getBoundingClientRect().top <= photoOffsetHeight) {
                setActiveSection("Relevant Projects");
            } else if (hackathonRef.current && hackathonRef.current.getBoundingClientRect().top <= photoOffsetHeight) {
                setActiveSection("Hackathons and Competitions");
            } else if (workExperienceRef.current && workExperienceRef.current.getBoundingClientRect().top <= photoOffsetHeight) {
                setActiveSection("Work Experience");
            } else if (educationRef.current && educationRef.current.getBoundingClientRect().top <= photoOffsetHeight) {
                setActiveSection("Education");
            } else if (aboutMeRef.current && aboutMeRef.current.getBoundingClientRect().top <= photoOffsetHeight) {
                setActiveSection("About Me");
            } 
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [photoOffsetHeight]);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const scrollOffset = ref.current.offsetTop - headerHeight;
            window.scrollTo({ top: scrollOffset, behavior: "smooth" });
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
                    display="flex"
                    justifyContent="center" 
                    alignItems="center"
                    style={{
                        background: "linear-gradient(to right, #00008b, #ff69b4)"
                    }}                
                >
                    <header>
                        <Stack direction="row" spacing={2}>
                            <Button
                                onClick={() => scrollToSection(aboutMeRef)}
                                style={{
                                    color: "#fff",
                                    backgroundColor: (activeSection === "About Me") ? "#00FFb4" : "transparent",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#00FFb4"}
                                onMouseLeave={(e) => (activeSection === "About Me") ? e.currentTarget.style.backgroundColor = "#00FFb4" : e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                About Me
                            </Button>
                            <Button
                                onClick={() => scrollToSection(educationRef)}
                                style={{
                                    color: "#fff",
                                    backgroundColor: activeSection === "Education" ? "#ff69b4" : "transparent",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#ff69b4"}
                                onMouseLeave={(e) => (activeSection === "Education") ? e.currentTarget.style.backgroundColor = "#ff69b4" : e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                Education
                            </Button>
                            <Button
                                onClick={() => scrollToSection(workExperienceRef)}
                                style={{
                                    color: "#fff",
                                    backgroundColor: activeSection === "Work Experience" ? "#3069b0" : "transparent",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#3069b0"}
                                onMouseLeave={(e) => (activeSection === "Work Experience") ? e.currentTarget.style.backgroundColor = "#3069b0" : e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                Work Experience
                            </Button>
                            <Button
                                onClick={() => scrollToSection(hackathonRef)}
                                style={{
                                    color: "#fff",
                                    backgroundColor: activeSection === "Hackathons and Competitions" ? "#ff624b" : "transparent",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#ff624b"}
                                onMouseLeave={(e) => (activeSection === "Hackathons and Competitions") ? e.currentTarget.style.backgroundColor = "#ff624b" : e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                Hackathons and Competitions
                            </Button>
                            <Button
                                onClick={() => scrollToSection(projectRef)}
                                style={{
                                    color: "#fff",
                                    backgroundColor: activeSection === "Relevant Projects" ? "#0069b4" : "transparent",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0069b4"}
                                onMouseLeave={(e) => (activeSection === "Relevant Projects") ? e.currentTarget.style.backgroundColor = "#0069b4" : e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                Relevant Projects
                            </Button>
                            <Button
                                onClick={() => scrollToSection(skillRef)}
                                style={{
                                    color: "#fff",
                                    backgroundColor: activeSection === "Technical Skills" ? "#ff00b4" : "transparent",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#ff00b4"}
                                onMouseLeave={(e) => (activeSection === "Technical Skills") ? e.currentTarget.style.backgroundColor = "#ff00b4" : e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                Technical Skills
                            </Button>
                        </Stack>
                    </header>
                </Box>

                <Box marginTop={12}>
                    <Box style={{ height: `calc(100vh - ${photoOffsetHeight}px)` }} display={"flex"} justifyContent={"center"} marginBottom={9}>
                        <AboutMeSection ref={aboutMeRef} />
                    </Box>
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
                sx={{ 
                    backgroundColor: "#2196f3",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} 
            >
                <footer> 
                    <p>&copy; {currentYear} Yeo Wei Hng. All rights reserved.</p>
                </footer>
            </Box>
        </ThemeProvider>
    );
};

export default App;
