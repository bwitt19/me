import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import Contents from './Contents';

const markdown = `
# projects:

### [super-f6](https://github.com/bwitt19/super-f6) (jan. 2020)
**graphics, visualization, gui programming**  
Open-source system developed with C# in Unity to visualize different celestial bodies. Current system 
is in alpha, with inspiration taken from [CFA](https://www.emergentspace.com/products/cluster-flight-application/) 
and DARPA's System F6.

### [crimedb](https://github.com/bwitt19/crimedb_447) (dec. 2019)
**software engineering, react, full stack**  
Full stack software engineering group project done with a group of fellow undergraduates to create a 
responsive web application for tracking crime data and statistics in the city of Baltimore.  
Uses React, Node.js, Express, and MongoDB.

### [rass](https://github.com/bwitt19/rass) (jul. 2019)
**machine learning, computer vision, assistive technology**  
Proof of concept for a voice interface to control an object segmentation and selection algorithm 
in Python.  
I aimed to have this be in relation to a project utilizing a robotic arm to execute the selection 
of objects, possibly for disabled individuals to retrieve objects from their surroundings, but this 
code is just for the interface.

`;

const pubs_markdown = `
# publications:

[[1]](https://ieeexplore.ieee.org/abstract/document/8730692): K. Rook, B. Witt, R. Bailey, J. Geigel, P. Hu and A. Kothari, "A Study of User Intent in Immersive Smart Spaces," *2019 IEEE International Conference on Pervasive Computing and Communications Workshops (PerCom Workshops)*, Kyoto, Japan, 2019, pp. 227-232, doi: 10.1109/PERCOMW.2019.8730692.
`

class Projects extends Component {
    render () {
        return (
            <div id="projects">
                <Contents>
                    <ReactMarkdown source={pubs_markdown} />
                </Contents>
                <Contents>
                    <ReactMarkdown source={markdown} />
                </Contents>
            </div>
        );
    }
}

export default Projects;