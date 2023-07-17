import React, { forwardRef } from "react";
import { Box, Typography, Grid, LinearProgress } from "@mui/material";

const TechnicalSkill = forwardRef<HTMLDivElement>((props, ref) => {
    const technicalSkills = [
        { name: "C++", percentage: 70 },
        { name: "Java", percentage: 90 },
        { name: "Python", percentage: 80 },
        { name: "HTML & CSS", percentage: 65 },
        { name: "SQL", percentage: 90 },
        { name: "Java Script", percentage: 80 },
        { name: "ExpressJS", percentage: 90 },
        { name: "ASP.NET", percentage: 75 },
        { name: "Django", percentage: 70 },
        { name: "PostgreSQL", percentage: 90 },
        { name: "MySQL", percentage: 70 },
        { name: "MongoDB", percentage: 80 },
        { name: "Neo4j", percentage: 70 },
        { name: "Carla Simulator", percentage: 60 },
        { name: "PyTorch", percentage: 50 },
    ];

    return (
        <div ref={ref}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h3" color="primary">Technical Skills</Typography>
            </Box>
                
                <Grid container spacing={10}>
                {technicalSkills.map(skill => (
                    <Grid item xs={12} sm={6} md={4} key={skill.name}>
                    <Box
                        sx={{
                            backgroundColor: "green",
                            p: 2,
                            borderRadius: 8,
                            textAlign: "center",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">{skill.name}</Typography>
                        <Box sx={{ mt: 1 }}>
                        <LinearProgress
                            variant="determinate"
                            value={skill.percentage}
                            sx={{
                                backgroundColor: "grey",
                                "& .MuiLinearProgress-bar": {
                                    backgroundColor: "blue"
                                }
                            }}
                        />
                        </Box>
                    </Box>
                    </Grid>
                ))}
                </Grid>
        </div>
    );
});

export default TechnicalSkill;
