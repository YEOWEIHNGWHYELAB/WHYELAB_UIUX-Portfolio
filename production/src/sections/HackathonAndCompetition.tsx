import React, { forwardRef, useEffect } from "react";
import { Box, Card, CardContent, IconButton, Link, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";

import ItchIOIcon from "../images/itchio-logo.png";
import DevPostIcon from "../images/devpost-logo.png";
import "../styling/HackathonAndCompetition.css";

const HackathonAndCompetition = forwardRef<HTMLDivElement>((props, ref) => {
    const hackathons = [
        {
            title: "NUS Hack & Roll 2024",
            projectname: "Graph Modelled Password Manager - Neo4PW",
            technologiesUsed: "Neo4j, PostgreSQL, React, D3.js, ExpressJS, JWT, PostMark",
            githubUrl: "https://github.com/YEOWEIHNGWHYELAB/HackNRoll-2024",
            devpostUrl: "https://devpost.com/software/neo4pw",
            description: `
                • Led a team of 4 members to build an authenticated full stack graph based password manager using Neo4j.
                • Credentials are modelled using relations, e.g: Gmail authenticates GitHub, so a relation will be formed from GitHub to Gmail as GitHub references the Google account's gmail.
                • Breach analysis uses haveibeenpwned.com's API mark nodes as compromised. Then using breadth-first search on each compromised node, it warns users by sending a list of compiled compromised credentials to their email address.
                • A csv parser is built into the app to allow users to import their credentials from their web browser's password manager export. The parser automatically creates nodes which represents each credentials and detects all relation creates them according to their reference.
                • Chrome extension that listens to POST request is built to allow user to automatically save/update their credentials automatically by calling API to the app. The extension also allows user to autofill their credentials for a particular website's login page they are on. 
                • Users can also manually perform CRUD operations on their credentials.
            `
        },
        {
            title: "NTU iNTUition v9.0",
            projectname: "NTUMODS",
            technologiesUsed: "Django, Dockers, PostgreSQL, React",
            githubUrl: "https://github.com/YEOWEIHNGWHYELAB/NTUMODS",
            devpostUrl: "https://devpost.com/software/ntumods",
            description: `
                • Collborated with another teammate to build a full stack web application that allows students to view rooms, timetable and modules in NTU.
                • The app allows users to filter rooms and then find one that is vacant one given a day and time range. User can also sort rooms based on the distance from their current location.
                • Programmed the backend using Django and PostgreSQL.
            `
        },
        {
            title: "NUS Hack & Roll 2023", 
            projectname: "Full Stack Multiplayer Self Driving Playground",
            technologiesUsed: "Canvas-api, ExpressJS, JWT, PostgreSQL, PyTorch, Socket.io, telegraf",
            githubUrl: "https://github.com/YEOWEIHNGWHYELAB/HackNRoll-2023", 
            devpostUrl: "https://devpost.com/software/2d-multiplayer-self-driving-playground",
            description: `
                • Led a team of 2 members to build a full stack self-driving car game with authentication so that players can battle their AI in a multiplayer environment to see whose car is better at driving.
                • Programmed the scoring system to upload the score to our backend database and then send a notification to our telebot to notify users of their score.
                • Integrated the self-driving car game into express.js and set up authentication using JWT.
                • Programmed the multiplayer synchronization and rooms using Socket.IO.
                • Programmed the barebones single hidden layer neural network.
            `
        },
        {
            title: "NTU iNTUition v8.0",
            projectname: "IPGeoGuessr",
            technologiesUsed: "HTML, CSS, Java Script, Google Maps API",
            githubUrl: "https://github.com/YEOWEIHNGWHYELAB/IPGeoGuessr.git",
            devpostUrl: "https://devpost.com/software/ipgeoguessr",
            description: `
                • Collborated with a team of 4 to build a IP Geolocation Guessing Game.
                • In each round, the player will be given a random IP address and they have to guess the location of the IP address on the map.
                • The game will tell the player how far their guess is from the actual location of the IP address.
            `
        },
        { 
            title: "NUS Hack & Roll 2022 (Winner of Top 8 Teams 🎉)",
            projectname: "2D MultiAI Shooting PlayGround",
            githubUrl: "https://github.com/YEOWEIHNGWHYELAB/HackNRoll-2022",
            devpostUrl: "https://devpost.com/software/hacknroll-2022",
            technologiesUsed: "PyGame, PyTorch, Socket.io, TelegramBot, Tkinter",
            description: `
                • Led a team of 4 and collaborated with 3 teammates to build the project within the time limit of 24 hours. We achieved 1 of the top 8 teams at the end of the hackathon. 
                • Programmed the Deep Reinforcement Learning, Socket Networking, and the DNS Networking of the game to ensure that the game works in a geo-redundant format where the players can play with each other even if they are situated in different countries. 
                • Built using PyTorch, Socket.io, TelegramBot and PyGame and it is a Multiplayer Deep Reinforcement Learning (with experience replay) game where player trains their AI to compete in a multiplayer setting with their friends from anywhere across the world.             
            `
        },
        { 
            title: "NUSGDG Gamecraft 2021 (3rd Place Winner 🎉)",
            projectname: "VooDoo Supremacy",
            githubUrl: "https://github.com/YEOWEIHNGWHYELAB/NUSGDG-GameCraft2021.git",
            itchioUrl: "https://whyelab.itch.io/voodoo-supremacist",
            technologiesUsed: "Unity",
            description: `
                • Manage a team of 3 for us to collaborate successfully in building the game withing a week.
                • Programmed the Player & Enemy Weapons and Enemy AI Behavior. Integrated the Level Design and created sound effects for the game.
                • Based on the theme of “Loosing is Winning”, we built a Voodoo Game using Unity which allows players to stick a pin on their enemy such that the player can damage the enemy by getting damage themselves.
                • Presented the game to Judges and Game Development Group members to highlight our unique game mechanics to align with the Gamecraft theme.
            `
        }
    ];

    useEffect(() => {
        const listItems = document.querySelectorAll(".list-component");

        const handleScroll = () => {
            for (let i = 0; i < listItems.length; i++) {
                const listItem = listItems[i];
                const listItemPosition = listItem.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (listItemPosition < windowHeight * 0.9) {
                    listItem.classList.add("fly-in"); // Add fly-in animation class
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={ref}>
            <Box id="hackathonncompetition-section" className="hackathon-section">
                <Typography variant="h3" color="primary" sx={{ marginBottom: "1rem" }}>
                    Hackathons & Competitions
                </Typography>

                {hackathons.map((event, index) => (
                    <Card
                        key={index}
                        sx={{
                            marginBottom: "1rem",
                        }}
                    >
                        <CardContent 
                            className="list-component"
                            style={{ 
                                border: "white 3px solid"
                            }}
                        >
                            <Typography variant="h4">{event.title}</Typography>

                            {event.githubUrl && (
                                <IconButton href={event.githubUrl} target="_blank">
                                    <GitHub />
                                </IconButton>
                            )}

                            {event.devpostUrl && (
                                <IconButton 
                                    href={event.devpostUrl} 
                                    target="_blank"
                                    style={{
                                        borderRadius: "50%",
                                        width: "40px",
                                        height: "40px",
                                     }}
                                >
                                    <Link color="inherit" underline="none">
                                        <img
                                            src={DevPostIcon}
                                            alt="DevPost"
                                            style={{ width: "24px", height: "24px", verticalAlign: "middle" }}
                                        />
                                    </Link>
                                </IconButton>
                            )}

                            {event.itchioUrl && (
                                <IconButton 
                                    href={event.itchioUrl}
                                    target="_blank"
                                    style={{
                                        borderRadius: "50%",
                                        width: "40px",
                                        height: "40px",
                                     }}
                                >
                                    <Link color="inherit" underline="none">
                                        <img
                                            src={ItchIOIcon}
                                            alt="ItchIO"
                                            style={{ width: "24px", height: "24px", verticalAlign: "middle" }}
                                        />
                                    </Link>
                                </IconButton>
                            )}

                            <Typography variant="body1">{event.projectname}</Typography>

                            <Typography variant="body1">
                                Technologies used: {event.technologiesUsed}
                            </Typography>

                            <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>{event.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </div>
    );
});

export default HackathonAndCompetition;
