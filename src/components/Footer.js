import React, {Component} from 'react';
import { Container } from 'react-bootstrap';

const resume_site = "https://raw.githubusercontent.com/bwitt19/me/32c12b603236132ec8de95da96069fe03b72aa3b/src/components/data/Blair%20Witt%20Resume%20Jul-20.pdf";


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