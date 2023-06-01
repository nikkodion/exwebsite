import React from "react";

import { motion } from "framer-motion";

import "./index.css";
 
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Home = () => {

    return (
        <div className="color-container">
            <div className="background-image"></div>
            <motion.div
                key="1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ marginRight: 'auto', paddingLeft: '2.5rem' }}>
                        <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
                            I'm EX Falchion!
                        </h1>
                            <div style={{textAlign:"center"}}>
                                <a href="https://www.youtube.com/c/exfalchion" target="_blank" rel="noopener noreferrer"><img src={require('../images/yt.png')} alt="test" style={{ width: 'auto', height: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem' }}/></a>
                                <a href="https://twitter.com/ExFalchion" target="_blank" rel="noopener noreferrer"><img src={require('../images/twit.png')} alt="test" style={{ width: 'auto', height: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem'  }}/></a>
                                <a href="https://www.linkedin.com/in/dion-fredrick-ybanez-943429274/" target="_blank" rel="noopener noreferrer"><img src={require('../images/linkedin.png')} alt="test" style={{ width: 'auto', height: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem'  }}/></a>
                                <a href="https://letterboxd.com/EXFalchion/" target="_blank" rel="noopener noreferrer"><img src={require('../images/letterboxd.png')} alt="test" style={{ width: 'auto', height: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem'  }}/></a>
                                <a href="https://myanimelist.net/profile/EXFalchion" target="_blank" rel="noopener noreferrer"><img src={require('../images/mal.png')} alt="test" style={{ width: 'auto', height: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem'  }}/></a>
                            </div>
                        <h3>
                            Well, my real name is Dion, but most people know me by the tag EX Falchion.<br></br>
                        </h3>
                        <p>
                            I'm a video editor, regional tournament event director, former semi-competitive fighting game player, and general fun guy! I love niche & obscure games and supporting the communities for them! I'm a supporter of all things creative!<br></br><br></br>
                            I run a casual YouTube channel as a hobby, with a style influenced by Niconico MAD edits,
                            as well as funny commentary, essay, and compilation videos, usually highlighting niche games.<br></br><br></br>
                            I directed the Shadow World series of regional fighting game events in North Carolina,
                            handling everything from event logistics to marketing for one of NC's largest FGC events,
                            and I got to work with various event organizers and artists!<br></br><br></br>
                            I'm one of the easiest people to get along with, so don't be afraid to hit me up!<br></br><br></br>
                            I went to NC State University, where I got my B.S. in computer science, giving me experience in Java, Python, C, & JavaScript with React.<br></br><br></br>
                            I also have a minor in film studies and I love all things film, including directing, editing, writing, history, genre, and culture!<br></br><br></br>
                            My favorite movies are the Revue Starlight movie and Liz and the Blue Bird!<br></br><br></br>
                            I have an IQ of 13,000,000.<br></br><br></br>
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="EXFalchion"
                                options={{ width: '25rem', height: '1350rem' }}
                            />
                        </div>
                    </div>
                    <div style={{ justifyContent: 'center', marginTop: '40px', paddingLeft: '1rem', textAlign: 'center' }}>
                        <img src={require('../images/claudine.png')} alt="claudine" style={{ width: '20rem', height: 'auto' }}/>
                        <p>This artwork of Saijou Claudine from Revue Starlight was commissioned and made by <a href="https://twitter.com/NiiDORO677901" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
      @NiiDORO677901
    </a> for one of the regional tournament events I directed, Shadow World 99!</p>
                        <p>Navigation button art commissioned and made by <a href="https://twitter.com/hurin_raika" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
      @hurin_raika
    </a> for Shadow World 100!</p>
                        <h3>Testimonials</h3>
                        <img src={require('../images/test1.png')} alt="test" style={{ width: '20rem', height: 'auto' }}/>
                        <img src={require('../images/test2.png')} alt="test" style={{ width: '20rem', height: 'auto' }}/>
                        <img src={require('../images/test3.png')} alt="test" style={{ width: '20rem', height: 'auto' }}/>
                    </div>
                    <div style={{ marginLeft: 'auto', paddingLeft: '1.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h3>
                            See a detailed portfolio with the links above!
                        </h3>
                        <h2>
                            Quick examples of my funnest work:
                        </h2>
                        <p>
                            Video Editing:
                        </p>
                            <iframe title="demo-index" width="400" height="225"
                                src="https://www.youtube.com/embed/m1MHGo5ciZ0">
                            </iframe>
                        <div style={{ textAlign: 'left' }}>
                                <ul>
                                    <li>A quick demo reel of some of my cooler edits!</li>
                                </ul>
                        </div>
                        <p>
                            Event Directing:
                        </p>
                        <h3><a href="https://www.start.gg/tournament/shadow-world-100-shadow-world-unicorn-00/details" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                        Shadow World 100 ☼ Shadow World Unicorn 00
    </a></h3>
                            <iframe title="sw100-index" width="400" height="225"
                                src="https://www.youtube.com/embed/YxwHzlfxvtI">
                            </iframe>
                        <div style={{ textAlign: 'left' }}>
                                <ul>
                                    <li>Grew a small college tournament into a regional of 180+ entrants and an estimated 200+ attendance!</li>
                                    <li>^ That's actually really impressive if you know how niche local fighting game events are! That's an over 400% growth in just a little over a year!</li>
                                    <li>Lead all logistics and marketing, including planning & securing funding, venue, sponsors, artists, streamers, organizers, creating trailers, promotions, & other assets as needed</li>
                                    <li>Roughly 3 years of experience total!</li>
                                    <li>Trailer showcases work with motion graphics, film editing theory, coordinating with artists & a voice actor, event marketing, scriptwriting, image editing, logo design, and a strong passion for Gundam, Love Live, and general Sunrise anime with tons of deep-cut references!</li>
                                    <li>Could I also stretch having to write a script for a Japanese voice actor to mean demonstration of amateur Japanese? (N4 level)</li>
                                </ul>
                        </div>
                        <p>
                            For-Fun Software:
                        </p>
                        <h3><a href="https://discord.com/api/oauth2/authorize?client_id=1102270684081688696&permissions=429497116736&scope=bot" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                        Mr. White Discord Bot (Invite Link)
    </a></h3>
    <img src={require('../images/mrwhite.png')} alt="mrwhite" style={{ width: '400px', height: 'auto' }}/>
                        <div style={{ textAlign: 'left' }}>
                                <ul>
                                    <li>Use !help for command list</li>
                                    <li>Created a Revue Starlight Discord bot that has multiple fun commands that involve editing images according to user input, responding to user messages, and more!</li>
                                    <li>How does it work? It parses JSONs from API calls, edits images/GIFs using PIL, has facial recognition using OpenCV, and runs using Google Cloud!</li>
                                    <li>Tools used: Python, VSCode, Git/Github, Discord/Tenor/Karthuria API, OpenCV, PIL, and Google Cloud Compute Engine VM!</li>
                                </ul>
                        </div>
                        <h3><a href="https://github.com/nikkodion/mysterydemo_public" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                        Mystery Game VN Working Demo
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
                        <h3>
                            And of course... This site that you're on right now is deployed with Heroku & uses JavaScript with React!
                        </h3>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
 
export default Home;