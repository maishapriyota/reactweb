import React from 'react';
import { Link } from 'react-router-dom';
import projectImage from './projectimage.png'; // Import your project image

const Project = () => {
    

    return (
        <div>
            <div className="drop-in-2">
            <div className="read-more">
                <h2>Read More About Me</h2>
                <Link to="/about">
                    <img src={projectImage} alt="Read More" className="readmore"/>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Project;
