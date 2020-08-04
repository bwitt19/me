import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import Contents from './Contents';

const markdown = `
# about me:

Hey! I'm a new Computer Science graduate from UMBC, experienced with and passionate about machine 
learning and data science, and how they can be applied to better the world around us -- from 
computer vision applications, to assistive robotics, smarter smart-home tech, and anything 
else under the sun.

Currently: *looking for work!*
`;

class About extends Component {
    render () {
        return (
            <Contents id="about">
                <ReactMarkdown source={markdown} />
            </Contents>
        );
    }
}

export default About;