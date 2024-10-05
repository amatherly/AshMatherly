import React from "react";
import ImageGallery from "react-image-gallery";
import "../css/image-gallery.css";

import maz1 from "../images/MazeSS1.png";
import maz2 from "../images/MazeSS2.png";
import maz3 from "../images/MazeSS3.png";
import mazVideo from "../Videos/UnicornChroniclesPreview.mp4";


import air1 from "../images/PPA#.PNG";
import air2 from "../images/PPA1.PNG";
import air3 from "../images/PPA2.PNG";
import air4 from "../images/PPA3.PNG";


import pier1 from "../images/pier_ratz_ss.png";
import pier2 from "../images/pier_ratz_ss1.png";
import pier3 from "../images/pier_ratz_ss2.png";

const Projects = () => {

    const thumbnailHeight = 500;

    const projectItems = {
        "Projects": [
            {
                "title": "PooPooAir – Air Quality Data Web Application",
                "technologies": "Java, Spring Boot, React, SQL, Google Cloud Platform",
                "Bullets": [
                    "Developed a full-stack web application for air quality monitoring, crafting RESTful API endpoints in Spring Boot to interact with a MySQL database.",
                    "Implemented complex SQL queries and designed database schemas to facilitate efficient data storage, retrieval, and manipulation.",
                    "Programmed and tested API methods using Postman for database interaction, including data insertion, updates, and real-time retrieval.",
                    "Integrated real-time Air Quality Index (AQI) data through external APIs to provide users with updates."
                ],
                Images: [

                    {
                        original: air3,
                        thumbnail: air3,
                    },
                    {
                        original: air2,
                        thumbnail: air2,

                    },
                    {
                        original: air4,
                        thumbnail: air4,
                    },

                ]
            },
            {
                "title": "Unicorn Chronicles – Educational Unity Game",
                "technologies": "C#, SQLite, Unity",
                "Bullets": [
                    "Programmed a 3D maze adventure game in Unity, using C# to make learning computer science principles engaging and interactive.",
                    "Applied MVC architecture and Object Oriented Programming (OOP) for scalable game design, allowing for easy expansion and maintenance of the game’s features.",
                    "Created comprehensive unit tests ensuring game reliability and functionality, utilizing Unity Testing Framework and NUnit."
                ],
                Images: [
                    // {
                    //     original: mazVideo,
                    //     thumbnail: mazVideo,
                    // },
                    {
                        original: maz1,
                        thumbnail: maz1,

                    },
                    {
                        original: maz2,
                        thumbnail: maz2,
                        originalHeight: thumbnailHeight,

                    },
                    {
                        original: maz3,
                        thumbnail: maz3,


                    },
                ]
            },
            {
                "title": "Pier Ratz – 3D Unity Game",
                "technologies": "C#, SQLite, Unity",
                "Bullets": [
                    "In Development. Pier Ratz is a passion project that I am currently working on. It is a 3D Unity game that is a mix between a platformer and a puzzle game. The game is set in a post-apocalyptic world where the player is a rat that has to navigate through a pier to find food and avoid predators."
                ],
                Images: [
                    {
                        original: pier1,
                        thumbnail: pier1,
                    },
                    {
                        original: pier2,
                        thumbnail: pier2,
                    },
                    {
                        original: pier3,
                        thumbnail: pier3,
                    },
                ]
            },
            {
                "title": "Portfolio Website",
                "technologies": "React, CSS, JavaScript",
                "Bullets": [
                    "Created a personal portfolio website to showcase professional projects and coding skills."
                ],
                Images: []
            }
        ],
        // Assuming you have 'Experience' and 'Education' arrays similar to 'Projects'
    };

    return (
        <div className="resume">
            {/* ...existing code... */}
            <div>
                <div className="section-title">Projects</div>
                <div>
                    {projectItems.Projects.map((item, index) => {
                        return (
                            <div key={index} className="project-container">
                                <div className="resume-title">
                                    <div>{item.title}</div>
                                    <div>{item.technologies}</div>
                                </div>
                                <ul>
                                    {item.Bullets.map((bullet, bulletIndex) => {
                                        return (
                                            <li key={bulletIndex} className="resume-bullet">{bullet}</li>
                                        );
                                    })}
                                </ul>
                                {item.Images.length > 0 &&
                                    <ImageGallery autoPlay ={true} showPlayButton={false} showThumbnails={false} showoriginalHeight={5} items={item.Images}/>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;
