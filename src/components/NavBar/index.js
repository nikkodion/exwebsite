import React from "react";
import { Nav, NavLink, NavMenu, ImageLink }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <ImageLink to="/" activeStyle>
                        <img src={require('./about.png')} alt="About" style={{ width: 'auto', height: '90px' }}/>
                    </ImageLink>
                    <NavLink to="/videos_edit" activeStyle>
                        <img src={require('./video_editing.png') } alt="Video Editing Projects" style={{ width: 'auto', height: '90px' }}/>
                    </NavLink>
                    <NavLink to="/videos_other" activeStyle>
                        <img src={require('./video_other.png') } alt="Other Video Projects" style={{ width: 'auto', height: '90px' }}/>
                    </NavLink>
                    <NavLink to="/event_direct" activeStyle>
                        <img src={require('./event_direct.png') } alt="Event Directing" style={{ width: 'auto', height: '90px' }}/>
                    </NavLink>
                    <NavLink to="/software" activeStyle>
                        <img src={require('./software.png') } alt="Software" style={{ width: 'auto', height: '90px' }}/>
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                    <img src={require('./contact.png') } alt="Contact" style={{ width: 'auto', height: '90px' }}/>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;