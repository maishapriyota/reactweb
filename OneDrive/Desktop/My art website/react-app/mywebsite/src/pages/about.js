import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './home.css';
import logoPhoto from './spotify.png';
import eu from './eu.jpeg';
import lead from './lead.jpeg';
import pub from './pub.jpeg';
import mentor from './mentor.jpeg';

const NotesPage = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>

            <div className={isDarkMode ? 'dark' : 'light'}>
                <div className="toggle-container">
                    <i className="fa-solid fa-sun"></i>
                    <label className="switch">
                        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
                        <span className="slider round"></span>
                    </label>
                    <i className="fa-solid fa-moon"></i>
                </div>

                <div className="container">
                    <h1 className="drop-in-2">Notes</h1>
                    <p className="drop-in-2">Some thoughts, reflections, & notes.</p>
                    <div className="drop-in-2">
                    <ul className="notes-list" >
                        <li className="note-item" onClick={() => setSelectedArticle('css')}>To EU Headquarters: A Journey of Ambition and Achievement</li>
                        <li className="note-item" onClick={() => setSelectedArticle('ai')}>The Artistry of Front-End Development: How Creativity Shapes Digital Experiences</li>
                        <li className="note-item" onClick={() => setSelectedArticle('throwaway')}>Leadership, Public Speaking, and Punctuality</li>
                        <li className="note-item" onClick={() => setSelectedArticle('figma')}>Mentoring and Making a Difference</li>
                    </ul>
                   </div>
                    <div id="articles">
                        <div id="css" style={{ display: selectedArticle === 'css' ? 'block' : 'none' }}>
                            <h2>To EU Headquarters: A Journey of Ambition and Achievement</h2>
                            <p>As a wide-eyed undergraduate student at the Faculty of Engineering and Information Technology, University of Pécs, Hungary, I found myself on an unexpected journey—one that would take me from the halls of academia to the corridors of power at the European Union headquarters. It was a surreal experience, standing amidst policymakers and diplomats, a testament to the limitless possibilities that lie ahead when one dares to dream.
                            
                               Visiting the EU headquarters in my first year of undergrad was a defining moment—one that reaffirmed my belief in the power of ambition and hard work. It was a reminder that age is no barrier to achievement and that with determination and dedication, anything is possible.

                               From that moment onward, I embarked on a journey fueled by ambition and a thirst for knowledge, defying expectations and charting my own path in pursuit of excellence.</p>
                               <img className="noteimage" src={eu} alt="EU Headquarters" />
                        </div>
                        <div id="ai" style={{ display: selectedArticle === 'ai' ? 'block' : 'none' }} >
                            <h2>The Artistry of Front-End Development: How Creativity Shapes Digital Experiences</h2>
                            <p>As a student with a passion for design and an affinity for technology, I found my true calling in the world of front-end development. For me, front-end development is more than just writing code; it's a form of art—a canvas on which I can bring my creative vision to life.</p>
                        </div>
                        <div id="throwaway" style={{ display: selectedArticle === 'throwaway' ? 'block' : 'none' }} >
                            <h2>Leadership, Public Speaking, and Punctuality</h2>
                            <p>Throughout my journey as a student leader and advocate, I've come to realize the importance of effective communication, strong leadership, and unwavering discipline. Whether I'm leading a team, delivering a presentation, or simply managing my time effectively, these skills have been instrumental in my success.

                                As a student ambassador and project lead, I've had the opportunity to hone my leadership skills, guiding and inspiring my peers to reach new heights. Through effective communication and strategic planning, I've fostered a culture of collaboration and excellence, empowering those around me to succeed.

                                In addition to my leadership prowess, I've also developed strong public speaking skills, able to articulate my ideas with clarity and conviction. Whether I'm addressing a room full of students or presenting my work to industry professionals, I command attention and respect, leaving a lasting impression wherever I go.</p>
                                <img className="noteimage1" src={lead} alt="Leadership" />
                                <img className="noteimage2" src={pub} alt="Public Speaking" />
                        </div>
                        <div id="figma" style={{ display: selectedArticle === 'figma' ? 'block' : 'none' }} >
                            <h2>Mentoring and Making a Difference</h2>
                            <p>As I continue on my journey of ambition and achievement, I remain steadfast in my commitment to empowering the next generation of students. Through my role as a mentor and advocate, I've leveraged my experiences and skills to make a positive impact in the lives of others, proving that true success is measured not by what we achieve, but by how we inspire and uplift those around us.

                                    As a mentor, I offer support, encouragement, and practical advice to students navigating the complexities of academia and beyond. Whether I'm providing academic guidance, career counseling, or simply lending a listening ear, I'm a source of inspiration and guidance for students striving to reach their full potential.

                                    In addition to my role as a mentor, I'm also a passionate advocate for diversity, equity, and inclusion in STEM fields. Through my involvement in student organizations and community initiatives, I work tirelessly to create a more inclusive and supportive environment for all students, regardless of their background or identity.</p>
                                    <img className="noteimage3" src={mentor} alt="Mentoring" />
                        </div>
                    </div>
                </div>
          
            <footer>
                <div className="footer-container">
                  <div className="spotify-capsule">
                    <img src={logoPhoto} alt="Spotify Logo"  />
                    <p className="spotifytext">On Repeat
                    <p className="spotify"><a href="https://open.spotify.com/track/4loXMor75kKVBB03ygwDlh?si=9d74e8b036464e96" target="_blank">Los Angeles</a></p>
                    </p>
                  </div>
                  <div className="elsewhere">
                    <h3>Elsewhere</h3>
                    <ul>
                  
                  <li><a href="https://github.com/maishapriyota">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/maishamaimuna2/">LinkedIn</a></li>
                  <li><a id="download-cv" href="#">CV</a></li>

                  
                  
                </ul>
                  </div>
                </div>
                <div className="copyright">
                  <p>© 2024 Maisha Maimuna</p>
                </div>
              </footer>
              </div>
            </div>
        
    );
};

export default NotesPage;
