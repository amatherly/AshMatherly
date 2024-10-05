import React, { useRef } from 'react';



import Header from "./Header";
import Headshot from "./Headshot";
import Bio from "./Bio";
import Resume from "./Resume";
import "../css/style.css";
import Projects from "./Projects";


const Page = () => {
    const aboutMeRef = useRef(null);
    const resumeRef = useRef(null);
    const projectsRef = useRef(null);


    return (
        <div>
            <div className="parent-container">
                <Header aboutMeRef={aboutMeRef} resumeRef={resumeRef} projectsRef={projectsRef}/>
                <div className="about-me-container" ref={aboutMeRef}>
                    <Bio/>
                    <Headshot/>
                </div>
                <div ref={resumeRef}>
                    <Resume/>
                </div>
                <div ref={projectsRef}>
                    <Projects/>
                </div>
            </div>
        </div>
    );
}


export default Page;