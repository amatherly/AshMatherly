import React from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

const Bio = () => {


    return (
        <div>
            <div className="title">Hi, I'm Ashleigh and I am a Software Developer :)</div>
            <p>
                I have always been the type of person to master any subject I am interested in. The subjects I have
                mostly been interested in all share one thing in common - design. I absolutely thrive when tasked with
                iterative design. I value efficiency, functionality, and a positive user experience.
                My background in coffee roasting, sewing, and leatherwork taught me that prototyping, problem-solving,
                and iteration, along with user feedback, are the keys to developing a truly great product.

            </p>
            <div className="contact-me">

                <button onClick={() => window.location.href = "https://github.com/amatherly"} style={{ background: 'none', border: 'none' }}>
                    <img src={github} alt="GitHub" style={{ width: '32px', height: '32px' }}/>
                </button>
                <button onClick={() => window.location.href = "https://www.linkedin.com/in/ashleighmath/"} style={{ background: 'none', border: 'none' }}>
                    <img src={linkedin} alt="LinkedIn" style={{ width: '32px', height: '32px' }}/>
                </button>
                <button onClick={() => window.location.href = ""}>
                    Contact Me
                </button>

            </div>
        </div>
    );
}

export default Bio;