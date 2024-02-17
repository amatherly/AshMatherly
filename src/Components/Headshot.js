import React from "react";
import headshot from "../images/headshot.png";

const Headshot = () => {
    return (
        <div>
            <img src={headshot}
                    alt={"headshot"}
                    className={"headshot"}
            />
        </div>
    );
}

export default Headshot;