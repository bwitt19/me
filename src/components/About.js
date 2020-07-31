import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import Container from 'react-bootstrap/Container';

import LineBreak from './LineBreak';

const markdown = `
## about me
##### (behind the bingus)

I'll fill this in later! But it definitely exists, I'm sure.  
I might talk about how I'm just some lil new grad that wants to actually have a job and such but yes.
`;

class About extends Component {
    render () {
        return (
            <div id='about'>
                <LineBreak />
                <Container className="my-5">
                    <ReactMarkdown source={markdown} />
                </Container>
            </div>
        );
    }
}

export default About;