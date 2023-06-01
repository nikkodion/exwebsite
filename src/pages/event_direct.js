import React from "react";

import { motion } from "framer-motion";
 
const Event = () => {
    return (
        <div className='color-container'>
            <div className="background-image"></div>
                <motion.div
                        key="4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}>
<div style={{ textAlign: 'center' }} >
                    <img src={require('../images/swpreview.png')} alt="test" style={{ width: '30rem', height: 'auto' }}/>
                    <p>I have roughly 3 years of experience as the Event Director for the regional North Carolina tournament event Shadow World @ NCSU, where I handled all logistics & marketing!</p>
                    <p>Responsibilities included all aspects of event planning, securing funding, venue, sponsors, artists, streamers, organizers, creating trailers, promotions, & other assets as needed!</p>
                    <p>I was one of the chief TOs for the North Carolina region and have worked extensively with stakeholders such as other local event organizers, sponsors, & artists!</p>
                    <p>Grew a small college tournament into a regional of 180+ entrants and an estimated 200+ attendance, which is actually really impressive if you know how niche local fighting game events are! That's an over 400% growth in just a little over a year!</p>
                    <h3>Testimonials</h3>
                        <img src={require('../images/test1.png')} alt="test" style={{ width: '20rem', height: 'auto' }}/>
                        <img src={require('../images/test2.png')} alt="test" style={{ width: '20rem', height: 'auto' }}/>
                        <img src={require('../images/test3.png')} alt="test" style={{ width: '20rem', height: 'auto' }}/>
                    <h3>Other Event Organizers</h3>
                        <p>Events and organizers that I've worked with include:</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20rem', paddingRight: '20rem' }}>
                            <h3><a href="https://beacons.ai/oakcityesports" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                                Oak City Esports
                            </a></h3>
                            <h3>
                            <a href="https://linktr.ee/lastlevelnc" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                                Last Level NC
                            </a>
                            </h3>
                            <h3>
                            <a href="https://twitter.com/NCSU_SSBU" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                                Smash @ NC State
                            </a>
                            </h3>
                            <h3>
                            <a href="https://junkfoodarcades.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                                JunkFood Custom Arcades
                            </a>
                            </h3>
                            <h3>
                            <a href="https://twitter.com/ScrappySensei" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                                ScrappySensei/BullCity Streams
                            </a>
                            </h3>
                        </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Shadow World 100 ☼ Shadow World Unicorn 00
                        </h1>
                        <h3><a href="https://www.start.gg/tournament/shadow-world-100-shadow-world-unicorn-00/details" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            Event Page
                        </a></h3>
                        <iframe title="sw100-event" width="400" height="225"
                            src="https://www.youtube.com/embed/YxwHzlfxvtI">
                        </iframe>
                    </div>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Shadow World 99 ✰ shadow wor(l)d baroque
                        </h1>
                        <h3><a href="https://www.start.gg/tournament/shadow-world-99-shadow-wor-l-d-baroque/details" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            Event Page
                        </a></h3>
                        <iframe title="sw99-event" width="400" height="225"
                            src="https://www.youtube.com/embed/d8eQoN1z2KA">
                        </iframe>
                     </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Shadow World MINUS
                        </h1>
                        <h3><a href="https://www.start.gg/tournament/shadow-world-minus/details" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            Event Page
                        </a></h3>
                        <img src={require('../images/swminus.png')} alt="test" style={{ width: '400px', height: 'auto' }}/>
                    </div>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Shadow World X + ZERO
                        </h1>
                        <h3><a href="https://www.start.gg/tournament/shadow-world-x-zero/details" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            Event Page
                        </a></h3>
                        <iframe title="swx-event" width="400" height="225"
                            src="https://www.youtube.com/embed/-D9RKpbi1nE">
                        </iframe>
                     </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Shadow World 9 DX
                        </h1>
                        <h3><a href="https://www.start.gg/tournament/shadow-world-9-dx/details" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>
                            Event Page
                        </a></h3>
                        <img src={require('../images/sw9dx.png')} alt="test" style={{ width: '400px', height: 'auto' }}/>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h3>...and more</h3>
                </div>
                </motion.div> 
        </div>
    );
};
 
export default Event;