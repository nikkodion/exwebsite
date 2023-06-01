import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import VideosEdit from './pages/videos_edit';
import VideosOther from './pages/videos_other';
import Event from './pages/event_direct';
import Software from './pages/software';
import Contact from './pages/contact';
import { AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet';
 
function App() {
    return (
        <React.Fragment>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.2" />
        </Helmet>
        <Router>
            <NavBar />
            <AnimatePresence mode="wait">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/videos_edit' element={<VideosEdit />} />
                    <Route path='/videos_other' element={<VideosOther />} />
                    <Route path='/event_direct' element={<Event />} />
                    <Route path='/software' element={<Software />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </Router>
        </React.Fragment>
    );
}
 
export default App;