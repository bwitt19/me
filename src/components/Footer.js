import React, {Component} from 'react';
import { Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <footer class='footer'>
                <hr/>
                <Container className="pt-2 pb-4">
                    <nav>
                        <a href="mailto:bwitt190@gmail.com">[email]</a> &bull;&nbsp;
                        <a href="https://github.com/bwitt19">[github]</a> &bull;&nbsp;
                        <a href="#oops">full resume</a>
                    </nav>
                    <p><a href="https://github.com/bwitt19/bwitt19.github.io" title="full repository here!">made from scratch</a> with ReactJS and Bootstrap.</p>
                </Container>
            </footer>
        );
    }
}

export default Footer;