import React from 'react';
import { Container } from "react-bootstrap"

import resume_site from './data/resume_site';

function Navbar() {
    return(
        <Container className="my-4" id="navbar" fluid>
            <nav>
                <a href='#about'>About</a> &bull;&nbsp;
                <a href='#experience'>Experience</a> &bull;&nbsp;
                <a href='#projects'>Projects</a> &bull;&nbsp;
                <a href={resume_site}>Resume</a> 
            </nav>
        </Container>
    );
}

export default Navbar;