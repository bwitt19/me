import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import Contents from './Contents';

const markdown = `
# experience:

#### education:

**Computer Science, B.S.**, *magna cum laude*  
University of Maryland, Baltimore County (UMBC) - *graduated May 2020*  
- Graduated as "Outstanding Senior in Computer Science"
- GPA: 3.79 / 4.00
- President's List, Dean's List
- Teaching Assisant for UMBC's Undergraduate Computer Science Dept. (2 yrs)
- Tutor for UMBC's Academic Success Center (1.5 yrs)

#### work experience:

##### Undergraduate Researcher in AR/Machine Learning (NSF REU)
*NSF & Rochester Institute of Technology (RIT) - Rochester, NY*  
May 2018 - Mar. 2019  
- [Published and presented](https://ieeexplore.ieee.org/abstract/document/8730692) at IEEE PerCom’s PerLS 2019 workshop as second author
- Project experience with Machine Learning in Python, and HoloLens development in C# & Unity
- Worked with an undergraduate partner on a project examining the use of augmented reality headsets
in activity recognition algorithms, by analyzing data on user focus and gaze

##### AVAIL Lab: Undergraduate Research Assistant in VR/Machine Learning
*UMBC Computer Science & Electrical Engineering Dept. - Baltimore, MD*  
Mar. 2019 - May 2020
- Research assistant in UMBC’s [AVAIL](https://avail.umbc.edu) and [IRAL](http://iral.cs.umbc.edu) labs. Working full-time primarily with Drs. Don Engel and Cynthia Matuszek in AVAIL on assistive robotics and VR data visualization
- Duties include primary upkeep of UMBC’s motion capture VICON lab, and work involving the development of VR simulations to develop language algorithms for robots
- Worked with a team of graduate students on Human-Robot Interaction research

`;

class Experience extends Component {
    render () {
        return (
            <Contents id="experience">
                <ReactMarkdown source={markdown} />
            </Contents>
        );
    }
}

export default Experience;