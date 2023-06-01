import React from "react";

import { motion } from "framer-motion";

import "./index.css"
 
const VideosEdit = () => {
    return (
        <div className='color-container'>
            <div className="background-image"></div>
            <motion.div
                key="2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}>
                <div style={{ textAlign: 'center' }} >
                    <h1>Just want to see the coolest bits?</h1>
                    <p>I have a quick demo reel showcasing my general abilities to work on 2D rotoscoped animation, motion graphics, and smooth editing & transitions!</p>
                    <iframe title="demo-vid" width="400" height="225"
                        src="https://www.youtube.com/embed/m1MHGo5ciZ0">
                    </iframe>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Kyoto Animation Crossover OP (Nichijou Parody)
                        </h1>
                        <iframe title="kyoani" width="400" height="225"
                            src="https://www.youtube.com/embed/QZWtEgTD-8A">
                        </iframe>
                        <div style={{ textAlign: 'left' }}>
                            <ul>
                                <li>Niconico-style MAD parody recreation of Nichijou's second opening, featuring fully rotoscoped 2D animation!</li>
                                <li>Showcases work with 2D animation (rotoscoped), motion graphics, film editing theory, and a strong passion for Kyoto Animation anime with tons of deep-cut references!</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Shadow World 100 Reveal Trailer
                        </h1>
                        <iframe title="sw100" width="400" height="225"
                            src="https://www.youtube.com/embed/YxwHzlfxvtI">
                        </iframe>
                        <div style={{ textAlign: 'left' }}>
                            <ul>
                                <li>Showcases work with motion graphics, film editing theory, coordinating with artists & a voice actor, event marketing, scriptwriting, image editing, logo design, and a strong passion for Gundam, Love Live, and general Sunrise anime with tons of deep-cut references!</li>
                                <li>Could I also stretch having to write a script for a Japanese voice actor to mean demonstration of amateur Japanese? (N4 level)</li>
                                <li>These promos have a proven strong effectiveness in getting attendees! Since I started focusing on promos for Shadow World, it achieved a 400% growth in just a little over a year!</li>
                            </ul>
                        </div>
                     </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Shadow World 99 Reveal Trailer
                        </h1>
                        <iframe title="sw99" width="400" height="225"
                            src="https://www.youtube.com/embed/d8eQoN1z2KA">
                        </iframe>
                        <div style={{ textAlign: 'left' }}>
                            <ul>
                                <li>Showcases work with motion graphics, film editing theory, coordinating with artists & a voice actor, event marketing, scriptwriting, image editing, logo design, and a strong passion for Revue Starlight & 90s anime with tons of deep-cut references!</li>
                                <li>Could I also stretch having to write a script for a Japanese voice actor to mean demonstration of amateur Japanese? (N4 level)</li>
                                <li>These promos have a proven strong effectiveness in getting attendees! Since I started focusing on promos for Shadow World, it achieved a 400% growth in just a little over a year!</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Diavolo VS Satania
                        </h1>
                        <iframe title="diavolo" width="400" height="225"
                            src="https://www.youtube.com/embed/2UsivabDmUI">
                        </iframe>
                        <div style={{ textAlign: 'left' }}>
                            <ul>
                                <li>What would happen if two completely different characters from different anime met and fought each other? A fun meme made by masking and stitching together scenes!</li>
                            </ul>
                        </div>
                     </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Shadow World X + ZERO Reveal Trailer
                        </h1>
                        <iframe title="swx" width="400" height="225"
                            src="https://www.youtube.com/embed/-D9RKpbi1nE">
                        </iframe>
                        <div style={{ textAlign: 'left' }}>
                            <ul>
                                <li>Showcases work with motion graphics, film editing theory, event marketing, scriptwriting, image editing, logo design, and tons of deep-cut references!</li>
                                <li>These promos have a proven strong effectiveness in getting attendees! Since I started focusing on promos for Shadow World, it achieved a 400% growth in just a little over a year!</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Mob Chuuni 200 OP (Chuunibyou X Mob Psycho 100)
                        </h1>
                            <iframe title="mobchuuni" width="400" height="225"
                                src="https://www.youtube.com/embed/8tRrMEfWmT4">
                            </iframe>
                        <div style={{ textAlign: 'left' }}>
                            <ul>
                                <li>Fun recreation of the Mob Psycho 100 opening if it was the opening for a different anime, Chuunibyou!</li>
                                <li>Mostly an entire recreation editing & using assets & scenes from Chuunibyou!</li>
                                <li>Tons of deep cut references!</li>
                            </ul>
                        </div>
                     </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Nichijojo OP (Nichijou X Jojo's Bizarre Adventure)
                        </h1>
                            <iframe title="nichijojo" width="400" height="225"
                                src="https://www.youtube.com/embed/aNv_PjDSgCo">
                            </iframe>
                        <div style={{ textAlign: 'left' }}>
                            <ul>
                                <li>Similar to the above 'Kyoto Animation Crossover OP,' but much messier as I was less experienced.</li>
                                <li>Still pretty fun for an old edit!</li>
                            </ul>
                        </div>
                     </div>
                    <div style={{ flex: 1, marginRight: 'auto', paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
                        <h1>
                            Giorno & DIO Go to McDonald's - FULL MOVIE HD 2018
                        </h1>
                            <iframe title="giorno" width="400" height="225"
                                src="https://www.youtube.com/embed/P9ibDqbfPdY">
                            </iframe>
                        <div style={{ textAlign: 'left' }}>
                            <ul>
                                <li>it exists</li>
                            </ul>
                        </div>
                     </div>
                </div>
                <h3 style={{textAlign: 'center'}}>There are other videos on my YouTube channel!</h3>
            </motion.div>
        </div>
    );
};
 
export default VideosEdit;