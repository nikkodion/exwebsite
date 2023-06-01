import React from "react";

import { motion } from "framer-motion";
 
const Contact = () => {
    return (
        <div className='color-container'>
            <div className="background-image"></div>
                <motion.div
                        key="6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}>
                    <div style={{ textAlign: 'center' }} >
                        <h3>Want to contact me for events, videos, any other opportunities, or just want to say hi?</h3>
                        <p>I'm open to hear you out or just smile back at you. I'm a very nice person, I promise.</p>
                        <h2>
                        <img src={require('../images/gmail.png')} alt="gmail" style={{ width: 'auto', height: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem' }}/>
                            nikkodion@gmail.com
                        </h2>
                        <h2>
                            <a href="https://www.linkedin.com/in/dion-fredrick-ybanez-943429274/" target="_blank" rel="noopener noreferrer"><img src={require('../images/linkedin.png')} alt="test" style={{ width: 'auto', height: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem'  }}/></a>
                            <a href="https://www.linkedin.com/in/dion-fredrick-ybanez-943429274/" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>LinkedIn</a>
                        </h2>
                        <h2>
                            <img src={require('../images/discord.png')} alt="discord" style={{ width: 'auto', height: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem' }}/>
                            EX Falchion#8379
                        </h2>
                        <h2>
                            <a href="https://twitter.com/ExFalchion" target="_blank" rel="noopener noreferrer"><img src={require('../images/twit.png')} alt="test" style={{ width: 'auto', height: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem'  }}/></a>
                            <a href="https://twitter.com/ExFalchion" target="_blank" rel="noopener noreferrer">@EXFalchion</a>
                        </h2>
                    </div>
                </motion.div> 
        </div>
    );
};
 
export default Contact;