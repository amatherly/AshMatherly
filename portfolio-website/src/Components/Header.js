import React from "react";

const Header = ({ aboutMeRef, resumeRef, projectsRef }) => {

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className={"navbar"}>
            <button onClick={() => scrollToRef(aboutMeRef)}>About</button>
            <button onClick={() => scrollToRef(projectsRef)}>Projects</button>
            <button onClick={() => scrollToRef(resumeRef)}>Experience</button>

        </div>
    );

}

export default Header;