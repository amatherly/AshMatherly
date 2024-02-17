import React from "react";

const Projects = () => {

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
                ]
            },
            {
                "title": "Unicorn Chronicles – Educational Unity Game",
                "technologies": "C#, SQLite, Unity",
                "Bullets": [
                    "Programmed a 3D maze adventure game in Unity, using C# to make learning computer science principles engaging and interactive.",
                    "Applied MVC architecture and Object Oriented Programming (OOP) for scalable game design, allowing for easy expansion and maintenance of the game’s features.",
                    "Created comprehensive unit tests ensuring game reliability and functionality, utilizing Unity Testing Framework and NUnit."
                ]
            },
            {
                "title": "Portfolio Website",
                "technologies": "React, CSS, JavaScript",
                "Bullets": [
                    "Created a personal portfolio website to showcase professional projects and coding skills."
                ]
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
                            <div key={index} className="resume-item">
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;
