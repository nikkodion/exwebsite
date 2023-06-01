import React from "react";

import { motion } from "framer-motion";
 
const Software = () => {
    return (
        <div className='color-container'>
            <div className="background-image"></div>
                <motion.div
                        key="5"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}>
<div style={{ textAlign: 'center' }} >
                    <p>I tend to mess around once in a while just for the heck of it.</p>
                    <h3>Practical skills include backend (Java, Python, C), frontend (JavaScript with React), & database (MySQL)!</h3>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                    <h3>Mr. White Discord Bot</h3>
                    <h3><a href="https://discord.com/api/oauth2/authorize?client_id=1102270684081688696&permissions=429497116736&scope=bot" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                        Invite Link
    </a></h3>
    <img src={require('../images/mrwhite.png')} alt="mrwhite" style={{ width: '400px', height: 'auto' }}/>
                        <div style={{ textAlign: 'left' }}>
                                <ul>
                                    <li>Created a Revue Starlight Discord bot that has multiple fun commands that involve editing images according to user input, responding to user messages, and more!</li>
                                    <li>How does it work? It parses JSONs from API calls, edits images/GIFs using PIL, has facial recognition using OpenCV, and runs using Google Cloud!</li>
                                    <li>Tools used: Python, VSCode, Git/Github, Discord/Tenor/Karthuria API, OpenCV, PIL, and Google Cloud Compute Engine VM!</li>
                                </ul>
                        </div>
                    </div>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                    <h3>Mystery Game VN Working Demo</h3>
                    <h3><a href="https://github.com/nikkodion/mysterydemo_public" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                        Public Distribution
    </a></h3>
    <img src={require('../images/mysterydemo.png')} alt="mysterydemo" style={{ width: '400px', height: 'auto' }}/>
                        <div style={{ textAlign: 'left' }}>
                                <ul>
                                    <li>Created a working demo for a work-in-progress mystery visual novel game!</li>
                                    <li>My current project! This is just a demonstration that the game's code functions on a scalable level!</li>
                                    <li>Technically I shouldn't be telling you about this since the game is so early in production, but it's my project so it's OK!</li>
                                    <li>Created point-and-click events & quicktime events that mimic a fighting game</li>
                                    <li>Tools used: Python, Ren'Py, paint.net, Notepad++ (found it easier than VSCode in this instance)</li>
                                </ul>
                        </div>
                     </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                    <h3>Multiple BBTag Game Mods</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ margin: '1rem' }}><a href="https://drive.google.com/file/d/1NVwJ6HygSvqmKHRqYRWxsIcYAi61TKnf/view" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            God Mode Tager
                        </a></h3>
                        <h3 style={{ margin: '1rem' }}><a href="https://drive.google.com/file/d/1pBXNVx7sro0cP1gAhAeEtSNYqqG2Y0ID/view" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            God Mode Blitztank
                        </a></h3>
                        <h3 style={{ margin: '1rem' }}><a href="https://drive.google.com/file/d/1RmvdLHa9GbEFLehdbgJ4hzCgQ0bvTcLB/view" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            Rainbow Mode Kanji
                        </a></h3>
                    </div>
                        <iframe title="bbtag" width="400" height="225"
                            src="https://www.youtube.com/embed/VQJ3jRbn3KE">
                        </iframe>
                        <div style={{ textAlign: 'left' }}>
                                <ul>
                                    <li>Created multiple modded characters for the fighting game BlazBlue Cross Tag Battle on PC!</li>
                                    <li>Fun features and modifications include new abilities such as time-stop, ported moves from other games, and other modified animations & properties!</li>
                                    <li>Tools used: Python, BBTools, Notepad++</li>
                                </ul>
                        </div>
                    </div>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                    <h3>Multiple Original MUGEN Characters</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ margin: '1rem' }}><a href="https://mugenarchive.com/forums/downloads.php?do=file&id=77529-ugandan-knuckles-ex-falchion" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            Ugandan Knuckles
                        </a></h3>
                        <h3 style={{ margin: '1rem' }}><a href="https://mugenarchive.com/forums/downloads.php?do=file&id=68982-koichi-pose-ex-falchion" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            Koichi Pose
                        </a></h3>
                        <h3 style={{ margin: '1rem' }}><a href="https://mugenarchive.com/forums/downloads.php?do=file&id=67743-one-kick-rick-ex-falchion" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            One Kick Rick
                        </a></h3>
                    </div>
                    <iframe title="ugandan-knuckles" width="400" height="225"
                            src="https://www.youtube.com/embed/ZRz2Vl_cQ0Y">
                        </iframe>
                        <div style={{ textAlign: 'left' }}>
                                <ul>
                                    <li>Created multiple fully functional characters for the MUGEN fighting game engine, a framework for C!</li>
                                    <li>Fun features, such as the ability to time-stop, teleport, call assists, and more!</li>
                                    <li>Ugandan Knuckles rose to the top of the view and download charts on popular site Mugen Archive, with over 9k downloads on the site alone, as well as 250k+ viewers on YouTube!</li>
                                    <li>Tools used: MUGEN Code, Fighter Factory 3, paint.net, Notepad++</li>
                                </ul>
                        </div>
                     </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                    <h3>Data Prioritization Manager Application for NCSU Laboratory of Analytical Sciences</h3>
                        <div style={{ textAlign: 'left' }}>
                                <ul>
                                    <li>Primarily developed & tested the MVC Django backend while also assisting in React frontend, as well as contributing to design and presentations</li>
                                    <li>Showed flexibility, teamwork, willingness to work with sponsor’s shifting requirements in a team with 4 other students</li>
                                    <li>Demonstrated ability to learn new technologies quickly, utilizing the React and Django frameworks for the first time</li>
                                    <li>Tools used: Python w/ Django REST Framework, JavaScript w/ React, VSCode, Git/Github</li>
                                </ul>
                        </div>
                    </div>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                    <h3>Frontend UI Design for EPA SeqaPASS</h3>
                        <div style={{ textAlign: 'left' }}>
                                <ul>
                                    <li>Created an improved practical frontend UI design for a sponsor's existing application, with a working mockup in Figma, and multiple design documents such as mental models & user tasks/actions</li>
                                    <li>Communicated with sponsors to assess stakeholder needs, collecting feedback through usability tests</li>
                                    <li>Worked in a team of 3 other students</li>
                                    <li>Tools used: Figma</li>
                                </ul>
                        </div>
                     </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h3>...and more</h3>
                </div>
                </motion.div> 
        </div>
    );
};
 
export default Software;