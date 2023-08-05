import React, { forwardRef } from "react";
import { Box, Card, CardContent, IconButton, Link, Typography  } from "@mui/material";
import { GitHub } from "@mui/icons-material";

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
        title: "Simple Location Tracker",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/Location-Getter",
        technologies: "ExpressJS, HTML & CSS, JWT, PostgreSQL",
        description: "A full stack application that allows user to track their locations. Users simply need to create an account and once they are logged in, they can start tracking their location by clicking start. The tracker will save the user's GPS sensor location based on an interval of 10 second and the location will be saved into the database."
    },
    {
        title: "Game Stat Tracker",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/GameStatTracker",
        technologies: "Django, PostgreSQL, ReactJS",
        description: "A full stack application that allows users to track their game statistics. Users can create an account, add games, and add game session data such as the score of the game. The application also allows the user to view their games played in the form of a pie chart."
    },
    {
        title: "To Do Tracker",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/ToDoTracker",
        technologies: "Django, PostgreSQL, ReactJS",
        description: "A full stack to do task manager that allows user to track the task they have. Users can perform CRUD operation on the tasks they have and also create new categories associated with each task. The application also allows the user to view their tasks in the form of a pie chart."
    },
    {
        title: "Flappy Bird Get Rekt",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/Flappy-Bird-Get-Rekt",
        technologies: "Matplotlib, PyGame, PyTorch",
        description: "A scuffed flappy bird clone that uses a reinforcement learning with experience replay algorithm to learn how to play the game. Players can first train their neural network to play the game and once they are satisfied, they can then save the neural network and use it for future gameplay. Highest score obtained: 5117."
    },
    {
        title: "Flappy Bird Get Rekt",
        githubLink: "https://github.com/YEOWEIHNGWHYELAB/Flappy-Bird-Get-Rekt",
        technologies: "Matplotlib, PyGame, PyTorch",
        description: "A scuffed flappy bird clone that uses a reinforcement learning with experience replay algorithm to learn how to play the game. Players can first train their neural network to play the game and once they are satisfied, they can then save the neural network and use it for future gameplay. Highest score obtained: 5117."
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
