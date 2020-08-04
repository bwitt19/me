import React from 'react';
import { Container } from "react-bootstrap"

const resume_site = "https://raw.githubusercontent.com/bwitt19/me/32c12b603236132ec8de95da96069fe03b72aa3b/src/components/data/Blair%20Witt%20Resume%20Jul-20.pdf";

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