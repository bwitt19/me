import React, {Component} from 'react';
import { Container } from "react-bootstrap"

function Navbar() {
    return(
        <Container className="my-4" id="navbar" fluid>
            <nav>
                <a href='#about'>About</a> &bull;&nbsp;
                <a href='#resume'>Resume</a> &bull;&nbsp;
                <a href='#experience'>Experience</a> &bull;&nbsp;
                <a href='#projects'>Projects</a>
            </nav>
        </Container>
    );
}

export default Navbar;