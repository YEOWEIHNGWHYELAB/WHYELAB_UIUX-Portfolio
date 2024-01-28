import React, { forwardRef, useEffect, useState } from "react";
import { Avatar, Box, Typography, Card, CardContent } from "@mui/material";

import anacleLogo from "../images/anacle-logo.png";
import geomotionLogo from "../images/geomotion-logo.png";
import recruitExpressLogo from "../images/recruit-express-logo.jpeg";
import genericLogo from "../images/generic-company-logo.png";
import rsafLogo from "../images/rsaf-logo.png";
import govtechLogo from "../images/govtech-logo.gif";

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
            company: "GovTech Singapore",
            date: "January 2024 - Present",
            title: "Software Engineer Internship",
            description: `
                • Developed a new API and writing unit test for the GovWallet backend.
                • Developed a new transaction history table for the GovWallet-Admin panel.
            `,
            logo: govtechLogo
        },
        {
            company: "Anacle System",
            date: "January 2023 - June 2023",
            title: "Software Developer Internship",
            description: `
                • Acquired and familiarized with the technical skills required in developing the Simplicity enterprise system within a tight schedule of 2 weeks.
                • Built a module for log reviews and a scheduler that triggers the reviews for the admin team to review the system log for a set time.
                • Assigned project milestones to further extend Simplicity modules for our customers’ needs.
                • Translated the entirety of Simplicity V10.0 within 1 week to Japanese as a demo to our Japanese clients.
                • Ported old software modules into the newer Simplicity software to maintain usability of old software on a new platform for our clients.
                • Researched and integrated Microsoft Automatic Graph Layout to maintain compatibility with modules that use the Microsoft Workflow. This is to maintain compatibility when Microsoft Workflow Foundation gets deprecated.
            `,
            logo: anacleLogo
        },
        {
            company: "Geomotion (Singapore) Private Limited",
            date: "May 2022 - July 2022",
            title: "Full Stack Developer Internship",
            description: `
                • Acquired and familiarize with the technical skills required in building the enterprise system within a tight schedule of 1 week.
                • Communicated with technical manager and geologist to understand their current workflow issues and devise ideas to incorporate into the enterprise system to improve the company’s overall efficiency in borehole data management.
                • Collaborated with intern colleague to develop a full stack enterprise system using Canvas API, Django, PostgreSQL that is maintainable and extensible as required by the company. The enterprise system aims to digitize all of client"s borehole data, automate generation of borehole reports, AGS data and cross-section reports.
                • Deployed the enterprise system onto the Geomotion Web Server for production using Gunicorn and Nginx with SSL certificate. The enterprise system has been running smoothly since the deployment and weekly daily backup has been made and it has the potential to cut down up to 700 hours of man hours annually.
            `,
            logo: geomotionLogo
        },
        {
            company: "Recruit Express",
            date: "June 2021 - August 2021",
            title: "Swab Test Administrator",
            description: `
                • Scanned on average of 100 documents daily of people coming for swab test and examine if patients are fit for swab test. 
                • Communicated with patients and verified the patient’s particulars to boost the swabbing team"s efficiency.
                • Collaborated with the swap team on ushering people to designated swab test area to maintain swabbing team"s efficiency.
                • Managed patients coming for swab test and ensuring safe distancing of patients.
            `,
            logo: recruitExpressLogo
        },
        {
            company: "Hup Huat Switch Board Co",
            date: "December 2019 - Jananuary 2020",
            title: "Sales Assistant",
            description: `
                • Collaborated with the shop owner to control and record orders from phone calls to ensure high accuracy of the orders that the customers placed.
                • Actively check invoice and goods delivery to ensure that all the sale for the day tally.
                • Performed routine check on equipment sold to ensure they are in good working condition.
                • Collaborated with shop owner to ensure transaction goes smoothly, so customers" demand is met.
                • Communicated with the customers to check their requirements and proposed relevant or appropriate products and explain its features and benefits.
            `,
            logo: genericLogo
        },
        {
            company: "Republic of Singapore Air Force (National Service)",
            date: "July 2018 - November 2019",
            title: "B Vehicle Technician",
            description: `
                • Inspected vehicle through road test with supervisors. Some tests include brake test and driving test. Ensures safety of drivers driving vehicle. Using On-Board Diagnostic to examine for fault code and clear fault code.
                • Managed vehicle parts and vehicle status. By inspecting if vehicle faulty parts are replaced.
                • Fixed faulty equipment on vehicles by investigating fault and tracing fault to root cause of issue. Fix and replace faulty parts and check if faults are cleared.
                • Servicing and maintaining vehicles (mileage with 40 km or 20 km) to assure vehicles are road ready. Through changing of oil, coolant, and inspection of vehicle parts.
                • Torquing wheel nuts to ensure wheels are well secured to correct specifications.
            `,
            logo: rsafLogo
        }
    ];

    return (
        <div ref={ref}>
            <Box id="experience-section">
                <Typography variant="h3" color="primary" sx={{ marginBottom: "1rem" }}>Work Experience</Typography>
                <div 
                    style={{
                        overflowX: "hidden"
                    }}
                >
                    {experiences.map((experience, index) => (
                        <Card
                            key={index}
                            sx={{
                                backgroundColor: "#002222",
                                marginBottom: "1rem",
                                marginLeft: showAnimation && index % 2 === 0 ? "0" : "auto", // Align left for even indices
                                marginRight: showAnimation && index % 2 === 1 ? "0" : "auto", // Align right for odd indices
                                transform: showAnimation ? "translateX(0)" : `translateX(${index % 2 === 0 ? "-100%" : "100%"})`, // Slide in from left/right
                                transition: "transform 0.5s ease",
                            }}
                        >
                            <CardContent>
                                <Avatar
                                    alt={experience.company}
                                    src={experience.logo}
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        zIndex: 1,
                                        backgroundColor: "transparent",
                                        width: 100,
                                        height: 100
                                    }}
                                />
                                <Typography variant="h4">{experience.company}</Typography>
                                <Typography variant="body1">{experience.title}</Typography>
                                <Typography variant="body1">{experience.date}</Typography>
                                <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>{experience.description}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Box>
        </div>
    );
});

export default WorkExperience;
