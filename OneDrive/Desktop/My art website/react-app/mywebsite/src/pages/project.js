import React from 'react';
import { Link } from 'react-router-dom';
import projectImage from './projectimage.png'; // Import your project image

const Project = () => {
    const projects = [
        { title: "Wire Box", description: "Turn hi-fi designs to lo-fi in one click - comes in nasty pink." },
        { title: "Figchat", description: "Chat, rage, or table flip about design with your team in Figma." },
        { title: "Outline", description: "Instantly spec out your designs so developers can have no excuses." },
        { title: "Custoji", description: "Create emojis that-should-not-be to torment your friends with." },
        { title: "Droplette", description: "Create AI enhanced color palettes in Figma based on your color system." },
        { title: "Annotator Soon", description: "Document A11y concerns to start conversations with developers." },
        { title: "Browso", description: "Get all of your computers details... but the year's 1999." },
        { title: "Cover Status", description: "Let folks know what's up with status thumbnails for your work." },
        { title: "Jeffsum", description: "World's first, and probably only, Jeff Goldblum Ipsum generator." }
    ];

    return (
        <div>
            <div className="container">
                {projects.map((project, index) => (
                    <div className="box" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            <div className="read-more">
                <h2>Read More About Me</h2>
                <Link to="/about">
                    <img src={projectImage} alt="Read More" />
                </Link>
            </div>
        </div>
    );
};

export default Project;
