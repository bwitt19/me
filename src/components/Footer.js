import React, {Component} from 'react';
import { Container } from 'react-bootstrap';

import resume_site from './data/resume_site';


class Footer extends Component {
    render() {
        return (
            <footer class='footer'>
                <Container className="py-4">
                    <nav>
                        <a href="mailto:bwitt190@gmail.com">[email]</a> &bull;&nbsp;
                        <a href="https://github.com/bwitt19">[github]</a> &bull;&nbsp;
                        <a href={resume_site}>full resume</a>
                    </nav>
                    <div>
                        <a href="https://github.com/bwitt19/bwitt19.github.io" title="full repository here!">made from scratch</a> with ReactJS and Bootstrap.
                    </div>
                </Container>
            </footer>
        );
    }
}

export default Footer;