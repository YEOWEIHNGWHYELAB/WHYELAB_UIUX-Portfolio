import { forwardRef, useEffect, useState } from "react";
import { Avatar, Box, Typography, Card, CardContent, Tooltip } from "@mui/material";

// Company Logos
import anacleLogo from "../images/anacle-logo.png";
import geomotionLogo from "../images/geomotion-logo.png";
import recruitExpressLogo from "../images/recruit-express-logo.jpeg";
import genericLogo from "../images/generic-company-logo.png";
import rsafLogo from "../images/rsaf-logo.png";
import govtechLogo from "../images/govtech-logo.gif";
import tiktokLogo from "../images/tiktok-logo.png";

// Tech Stack Logos
import goIcon from "../images/go.png";
import postgresIcon from "../images/postgresql.png";
// import dockerIcon from "../images/docker.png";
// import tampermonkeyIcon from "../images/tampermonkey.png";
// import jiraIcon from "../images/jira.png";
// import jsIcon from "../images/javascript.png";
import djangoIcon from "../images/django.jpg";
import pythonIcon from "../images/python.png";
import reactIcon from "../images/react.png";

const WorkExperience = forwardRef<HTMLDivElement>((props, ref) => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const experienceSection = document.getElementById("experience-section");
            if (experienceSection) {
                const rect = experienceSection.getBoundingClientRect();
                setShowAnimation(rect.top <= window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const experiences = [
        {
            company: "TikTok",
            date: "July 2024 - Present",
            title: "Software Engineer",
            location: "Singapore",
            description: `
                • Merge data coming from TikTok trill & musical_ly on the BTM pipeline.
                • Adapted the TouTiao Config Center (TCC) for better configuration management.
                • Fixed userscript issues for TTP log viewer using Tampermonkey.
                • Developed Tempo (a Jira-like project management tool).
                • Built BTM metrics for E-commerce reliability and performance tracking.
            `,
            logo: tiktokLogo,
            techStack: [
                { name: "Go", icon: goIcon },
                { name: "Tampermonkey", icon: goIcon },
                { name: "Jira", icon: goIcon },
                { name: "PostgreSQL", icon: postgresIcon },
            ]
        },
        {
            company: "GovTech Singapore",
            date: "January 2024 - June 2024",
            title: "Software Engineer Internship",
            location: "Singapore",
            description: `
                • Developed new APIs and unit tests for GovWallet.
                • Built a transaction history table for the admin panel.
                • Wrote test suites for verifying landing page links.
                • Enhanced QR code scanner and generator.
            `,
            logo: govtechLogo,
            techStack: [
                { name: "Go", icon: goIcon },
                { name: "PostgreSQL", icon: postgresIcon },
                { name: "React", icon: reactIcon },
            ]
        },
        {
            company: "Anacle System",
            date: "January 2023 - June 2023",
            title: "Software Developer Internship",
            location: "Singapore",
            description: `
                • Built log review modules and schedulers.
                • Translated Simplicity V10.0 to Japanese.
                • Ported legacy modules and integrated MS Graph Layout.
            `,
            logo: anacleLogo,
            techStack: [
                { name: "JavaScript", icon: goIcon },
                { name: "PostgreSQL", icon: postgresIcon },
            ]
        },
        {
            company: "Geomotion (Singapore) Private Limited",
            date: "May 2022 - July 2022",
            title: "Full Stack Developer Internship",
            location: "Singapore",
            description: `
                • Built a full-stack enterprise system using Django & PostgreSQL.
                • Digitized borehole data and automated AGS reports.
                • Deployed with Gunicorn + Nginx and setup daily backups.
            `,
            logo: geomotionLogo,
            techStack: [
                { name: "Django", icon: djangoIcon },
                { name: "PostgreSQL", icon: postgresIcon },
                { name: "Python", icon: pythonIcon },
                { name: "Docker", icon: goIcon },
            ]
        },
        {
            company: "Recruit Express",
            date: "June 2021 - August 2021",
            title: "Swab Test Administrator",
            location: "Singapore",
            description: `
                • Managed and scanned patient records.
                • Communicated with patients and supported the swab team.
            `,
            logo: recruitExpressLogo,
            techStack: []
        },
        {
            company: "Hup Huat Switch Board Co",
            date: "December 2019 - January 2020",
            title: "Sales Assistant",
            location: "Singapore",
            description: `
                • Handled customer orders and equipment checks.
                • Ensured delivery accuracy and assisted sales transactions.
            `,
            logo: genericLogo,
            techStack: []
        },
        {
            company: "Republic of Singapore Air Force (National Service)",
            date: "July 2018 - November 2019",
            title: "B Vehicle Technician",
            location: "Singapore",
            description: `
                • Performed diagnostics and road safety checks on military vehicles.
                • Fixed and maintained vehicle systems and parts.
            `,
            logo: rsafLogo,
            techStack: []
        }
    ];

    return (
        <div ref={ref}>
            <Box id="experience-section">
                <Typography variant="h3" color="primary" sx={{ marginBottom: "1rem" }}>
                    Work Experience
                </Typography>
                <div style={{ overflowX: "hidden" }}>
                    {experiences.map((experience, index) => (
                        <Card
                            key={index}
                            sx={{
                                backgroundColor: "#002222",
                                marginBottom: "1rem",
                                marginLeft: showAnimation && index % 2 === 0 ? "0" : "auto",
                                marginRight: showAnimation && index % 2 === 1 ? "0" : "auto",
                                transform: showAnimation ? "translateX(0)" : `translateX(${index % 2 === 0 ? "-100%" : "100%"})`,
                                transition: "transform 0.5s ease",
                            }}
                        >
                            <CardContent>
    <Avatar
        alt={experience.company}
        src={experience.logo}
        sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
            backgroundColor: "transparent",
            width: 100,
            height: 100
        }}
    />

    <Typography variant="h4" gutterBottom>{experience.company}</Typography>

    {/* Title + Date + Location + Tech Stack aligned in a row */}
    <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        sx={{ marginBottom: "1rem", gap: 1 }}
    >
        <Box>
            <Typography variant="body1">{experience.title}</Typography>
            <Typography variant="body1">{experience.date}</Typography>
            <Typography variant="body1">{experience.location}</Typography>
        </Box>

        {/* Tech stack icons on the right */}
        {experience.techStack?.length > 0 && (
            <Box display="flex" gap={1} flexWrap="wrap">
                {experience.techStack.map((tech, idx) => (
                    <Tooltip title={tech.name} key={idx}>
                        <Avatar
                            alt={tech.name}
                            src={tech.icon}
                            sx={{ width: 32, height: 32 }}
                        />
                    </Tooltip>
                ))}
            </Box>
        )}
    </Box>

    <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
        {experience.description}
    </Typography>
</CardContent>
                        </Card>
                    ))}
                </div>
            </Box>
        </div>
    );
});

export default WorkExperience;
