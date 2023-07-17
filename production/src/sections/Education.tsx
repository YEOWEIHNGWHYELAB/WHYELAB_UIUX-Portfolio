import React, { forwardRef, useEffect, useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Education = forwardRef<HTMLDivElement>((props, ref) => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const educationSection = document.getElementById("education-section");

            if (educationSection) {
                const rect = educationSection.getBoundingClientRect();
                setShowAnimation(rect.top <= window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const educations = [
        {
            school: "National University of Singapore",
            description: "Bachelor of Engineering (Computer Engineering)",
            date: "August 2020 - May 2024",
        },
        {
            school: "Arizona State University",
            description: "Student Exchange (Computer Science)",
            date: "August 2022 - December 2022",
        },
        {
            school: "Tampines Junior College",
            description: "GCE A Levels",
            date: "February 2016 - November 2017",
        },
    ];

    return (
        <div ref={ref}>
            <Box id="education-section">
                <Typography variant="h3" color="primary" sx={{ marginBottom: "1rem" }}>Education</Typography>
                <div 
                    style={{
                        overflowX: "hidden"
                    }}
                >
                    {educations.map((education, index) => (
                        <Card
                            key={index}
                            sx={{
                                backgroundColor: "#220022",
                                marginBottom: "1rem",
                                marginLeft: showAnimation && index % 2 === 0 ? "0" : "auto", // Align left for even indices
                                marginRight: showAnimation && index % 2 === 1 ? "0" : "auto", // Align right for odd indices
                                transform: showAnimation ? "translateX(0)" : `translateX(${index % 2 === 0 ? "-100%" : "100%"})`, // Slide in from left/right
                                transition: "transform 0.5s ease",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h4">{education.school}</Typography>
                                <Typography variant="body1">{education.date}</Typography>
                                <Typography variant="body1">{education.description}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Box>
        </div>
    );
});

export default Education;
