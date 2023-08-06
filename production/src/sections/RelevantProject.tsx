import React, { forwardRef } from "react";
import { Box, Card, CardContent, IconButton, Link, Typography  } from "@mui/material";
import { GitHub } from "@mui/icons-material";

import ItchIOIcon from "../images/itchio-logo.png";
import DevPostIcon from "../images/devpost-logo.png";

function getRandomDarkColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 5)];
    }

    return color;
}

const projects = [
    {
        title: "Distributed Cloud Storage (Social Media Cloud Overlord)",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/DistributedCloudStorage",
        technologies: "ExpressJS, React, JWT, PostgreSQL, MongoDB, GitHub API, YouTube API",
        description: "Full stack Google Drive clone with a file system built in to organize your files and folders. It uses social media and cloud services as a storage medium. For example, when you upload a video to our app, it will be uploaded to the platform of your choice (say YouTube), then we will store the YouTube Video ID in our database for you to retrieve the video afterwards."
    },
    {
        title: "Simple Location Tracker",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/Location-Getter",
        technologies: "ExpressJS, HTML & CSS, JWT, PostgreSQL",
        description: "Full stack application that allows user to track their locations. Users simply need to create an account and once they are logged in, they can start tracking their location by clicking start. The tracker will save the user's GPS sensor location based on an interval of 10 second and the location will be saved into the database."
    },
    {
        title: "Game Stat Tracker",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/GameStatTracker",
        technologies: "Django, PostgreSQL, ReactJS",
        description: "Full stack application that allows users to track their game statistics. Users can create an account, add games, and add game session data such as the score of the game. The application also allows the user to view their games played in the form of a pie chart."
    },
    {
        title: "To Do Tracker",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/ToDoTracker",
        technologies: "Django, PostgreSQL, ReactJS",
        description: "Full stack to do task manager that allows user to track the task they have. Users can perform CRUD operation on the tasks they have and also create new categories associated with each task. The application also allows the user to view their tasks in the form of a pie chart."
    },
    {
        title: "Escape Bros",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/NUSGDG-EscapeBros",
        itchioLink: "https://minheina.itch.io/escapebros",
        technologies: "Unity",
        description: "Multiplayer Co-op Game where 2 players have to work together to fight monster and reach the checkpoints. Players can first create their rooms, then the second character will join that room. Monsters will only start to appear if there are 2 players in the room."
    },
    {
        title: "Flappy Bird Get Rekt",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/Flappy-Bird-Get-Rekt",
        technologies: "Matplotlib, PyGame, PyTorch",
        description: "Scuffed flappy bird clone that uses a reinforcement learning with experience replay algorithm to learn how to play the game. Players can first train their neural network to play the game and once they are satisfied, they can then save the neural network and use it for future gameplay. Highest score obtained: 5117."
    },
    {
        title: "Hungry Hippo",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/NUSGDG-Level1-Hungry-Hippo",
        itchioLink: "https://minheina.itch.io/hungry-hippo",
        technologies: "Unity",
        description: "Collaborated with a team of 8 people to built the horror game for NUS Game Development Group Level 1 Game. Players can collect batteries to power their flashlight and collect all the mandrakes before returning back to the safe house. However, there are hippos that will attack the player if the player gets too close, player can use the flash light to stun the hippos temporarily."
    },
    {
        title: "2D Self Driving Car Game",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/2D-Self-Driving-Car-Python3",
        devpostLink: "https://devpost.com/software/2d-self-driving-car",
        technologies: "Matplotlib, PyGame, PyTorch",
        description: "2D self driving car that uses a reinforcement learning with experience replay algorithm to learn how to drive and avoid obstacles. Obstacles can be drawn onto the screen and deleted from the screen. After training, the brain can be saved and be loaded for future usage."
    }
];

const projectLen = projects.length;
  
const RelevantProject = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref}>
            <Box>
                <Typography variant="h3" color="primary">
                    Relevant Projects
                </Typography>
        
                <br />
        
                {projects.map((project, index) => (
                    <div>
                        <Card
                            key={index}
                            style={{
                                backgroundColor: "#c2c2c2",
                            }}
                        >
                            <CardContent
                                style={{
                                backgroundColor: getRandomDarkColor(),
                                border: "white 3px solid",
                                }}
                            >
                                <Typography variant="h4">
                                    {project.title}
                                </Typography>

                                <IconButton href={project.githubLink} target="_blank">
                                    <GitHub />
                                </IconButton>

                                {(project.devpostLink) &&
                                    <IconButton 
                                        href={project.devpostLink}
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
                                }

                                {project.itchioLink && (
                                    <IconButton 
                                        href={project.itchioLink}
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

                                <Typography variant="body1">
                                    Technologies used: {project.technologies}
                                </Typography>

                                <br />

                                <Typography variant="body1">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>

                        {(index !== projectLen - 1) && <br />}
                    </div>
                ))}
            </Box>
        </div>
    );
});

export default RelevantProject;
