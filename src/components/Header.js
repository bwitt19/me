import React, {Component} from 'react';
import { Container, Image, Jumbotron } from 'react-bootstrap';
import ProfilePic from './data/itme.jpg';

class Header extends Component {
    render() {
        return (
            <header>
                <div id='header'>
                    <Jumbotron fluid>
                        <Container className="pb-3">
                            <Image src={ProfilePic} roundedCircle fluid responsive />
                        </Container>
                        <h1>Blair Witt</h1>
                        <nav>
                            <a href="mailto:bwitt190@gmail.com" title="go ahead, make my day.">[bwitt190@gmail.com]</a> &bull;&nbsp;
                            <a href="https://github.com/bwitt19">[GitHub]</a>
                        </nav>
                    </Jumbotron>

                    <Container className="my-4" id="navbar">
                        <nav>
                            <a href='#about'>About</a> &bull;&nbsp;
                            <a href='#resume'>Resume</a> &bull;&nbsp;
                            <a href='#experience'>Experience</a> &bull;&nbsp;
                            <a href='#projects'>Projects</a>
                        </nav>
                    </Container>
                </div>
            </header>
        );
    }
}

export default Header;