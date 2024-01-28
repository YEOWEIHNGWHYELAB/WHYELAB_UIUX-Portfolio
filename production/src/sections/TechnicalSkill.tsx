import React, { forwardRef } from "react";
import { Box, Typography, Grid, LinearProgress } from "@mui/material";

import CPPIcon from "../images/cpp.png";
import PythonIcon from "../images/python.png"
import CarlaSimulatorIcon from "../images/carla-simulator.png";
import ReactIcon from "../images/react.png";
import ASPNETIcon from "../images/aspnet.svg";
import HTMLIcon from "../images/html.png";
import CSSIcon from "../images/css.png";
import SQLIcon from "../images/sql.png";
import JSIcon from "../images/js.png";
import ExpressJSIcon from "../images/expressjs.png";
import Neo4jIcon from "../images/neo4j.png";
import JWTIcon from "../images/jwt.png";
import PyTorchIcon from "../images/pytorch.png";
import DjangoIcon from "../images/django.jpg";
import PostgreSQLIcon from "../images/postgresql.png";
import MySQLIcon from "../images/mysql.svg"
import MongoDBIcon from "../images/mongodb.png";
import CSIcon from "../images/cs.png";
import MatPlotLibIcon from "../images/matplotlib.png";
import TSIcon from "../images/typescript.png";
import CypressIcon from "../images/cypress.png";
import JestIcon from "../images/jest.png";
import D3JSIcon from "../images/d3-js.png";

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styling/TechnicalSkill.css';

const TechnicalSkill = forwardRef<HTMLDivElement>((props, ref) => {
    const technicalSkills = [
        { name: "C++", percentage: 70, icon: CPPIcon, isCustomIcon: true },
        { name: "Java", percentage: 90, iconClass: 'fab fa-java', isCustomIcon: false },
        { name: "Python", percentage: 80, icon: PythonIcon, isCustomIcon: true },
        { name: "SQL", percentage: 90, icon: SQLIcon, isCustomIcon: true },
        { name: "C#", percentage: 90, icon: CSIcon, isCustomIcon: true },
        { name: "Type Script", percentage: 90, icon: TSIcon, isCustomIcon: true },
        { name: "HTML", percentage: 70, icon: HTMLIcon, isCustomIcon: true },
        { name: "Java Script", percentage: 80, icon: JSIcon, isCustomIcon: true },
        { name: "CSS", percentage: 60, icon: CSSIcon, isCustomIcon: true },
        { name: "ExpressJS", percentage: 90, icon: ExpressJSIcon, isCustomIcon: true },
        { name: "ASP.NET", percentage: 75, icon: ASPNETIcon, isCustomIcon: true },
        { name: "Django", percentage: 70, icon: DjangoIcon, isCustomIcon: true },
        { name: "PostgreSQL", percentage: 90, icon: PostgreSQLIcon, isCustomIcon: true },
        { name: "MySQL", percentage: 70, icon: MySQLIcon, isCustomIcon: true },
        { name: "MongoDB", percentage: 80, icon: MongoDBIcon, isCustomIcon: true },
        { name: "Neo4j", percentage: 70, icon: Neo4jIcon, isCustomIcon: true },
        { name: "React", percentage: 70, icon: ReactIcon, isCustomIcon: true },
        { name: "JWT", percentage: 70, icon: JWTIcon, isCustomIcon: true },
        { name: "Cypress", percentage: 70, icon: CypressIcon, isCustomIcon: true },
        { name: "Jest", percentage: 60, icon: JestIcon, isCustomIcon: true },
        { name: "D3.js", percentage: 50, icon: D3JSIcon, isCustomIcon: true },
        { name: "Matplotlib", percentage: 60, icon: MatPlotLibIcon, isCustomIcon: true },
        { name: "Carla Simulator", percentage: 60, icon: CarlaSimulatorIcon, isCustomIcon: true },
        { name: "PyTorch", percentage: 50, icon: PyTorchIcon, isCustomIcon: true }
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
                            <span key={skill.name} className="icon-wrapper">
                                {skill.isCustomIcon ? (
                                    <img src={skill.icon} alt={skill.name} style={{ width: '30px', height: '30px' }} />
                                ) : (
                                    <i className={skill.iconClass}></i>
                                )}
                                <Typography variant="h6">{skill.name}</Typography>
                            </span>
                            
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
