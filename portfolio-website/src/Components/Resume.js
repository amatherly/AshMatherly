import React from "react";

const Resume = () => {

    const resumeItems = {
        "Experience": [
            {
                "title": "Software Developer Intern",
                "company": "Exchvnge",
                "date": "Jan 2024 - Present",
                "Bullets": [
                    "Contribute to the front-end development of a responsive e-commerce platform for a vintage clothing trading app, utilizing React and JavaScript to create a dynamic user experience.",
                    "Utilize Figma to design interactive prototypes, incorporating design feedback to enhance user experience.",
                    "Integrate the company’s proprietary API to fetch, filter, and display product selections, ensuring real-time inventory accuracy and streamlined data handling.",
                    "Execute full-stack development tasks within an Agile framework, collaborating in sprints, stand-ups, and code reviews to rapidly iterate and deploy new features."
                ]
            },
            {
                "title": "Undergraduate Teaching Assistant",
                "company": "University of Washington, Tacoma",
                "date": "Jan 2024 - Present",
                "Bullets": [
                    "Design and conduct weekly workshops for the core Algorithms course to support student comprehension and engagement.",
                    "Develop challenging practice problems and worksheets that reinforce key concepts and facilitate active learning.",
                    "Facilitate problem-solving sessions, providing step-by-step guidance and clarifying students’ queries regarding algorithmic principles."
                ]
            }
        ],
        "Education": [
            {
                "school": "University of Washington, Tacoma",
                "degree": "Bachelors of Science in Computer Science and Systems",
                "date": "June 2024"
            }
        ]
    };

    return (
        <div className="resume">
            <div>
                <div className="section-title">Experience</div>
                <div>
                    {resumeItems.Experience.map((item) => {
                        return (
                            <div className="resume-item">
                                <div className="resume-title">
                                    <div>{item.title}</div>
                                    <div>{item.date}</div>
                                </div>
                                <div className="resume-company">{item.company}</div>

                                <ul>
                                    {item.Bullets.map((bullet) => {
                                        return (
                                            <li className="resume-bullet">{bullet}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <div className="section-title">Education</div>
                <div>
                    {resumeItems.Education.map((item) => {
                        return (
                            <div className="resume-item">
                                <div>{item.school}</div>
                                <div>{item.degree}</div>
                                <div>{item.date}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Resume;
