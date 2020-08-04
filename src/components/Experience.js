import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import Contents from './Contents';

const edu_markdown = `
# education: 

#### Computer Science, B.S.
University of Maryland, Baltimore County (UMBC)  
Graduated May 2020, **_magna cum laude_**
- Graduated as "Outstanding Senior in Computer Science" 
- GPA: 3.79 / 4.00
- President's List, Dean's List
- Teaching Assisant for UMBC's Undergraduate Computer Science Dept. (2 yrs)
- Tutor for UMBC's Academic Success Center (1.5 yrs)
`

const work_markdown = `
# work experience:

#### [NSF REU](https://www.cs.rit.edu/~reu/): Undergraduate Researcher in Computational Sensing
_NSF & Rochester Institute of Technology (RIT) - Rochester, NY_  
May 2018 - Mar. 2019  
**machine learning, AR development, unity, C#, python**
- [Published and presented](https://ieeexplore.ieee.org/abstract/document/8730692 "K. Rook, B. Witt, R. Bailey, J. Geigel, P. Hu and A. Kothari, "A Study of User Intent in Immersive Smart Spaces," 2019 IEEE International Conference on Pervasive Computing and Communications Workshops (PerCom Workshops), Kyoto, Japan, 2019, pp. 227-232, doi: 10.1109/PERCOMW.2019.8730692.") 
at IEEE PerCom’s PerLS 2019 workshop as second author
- Project experience with Machine Learning in Python, and HoloLens development in C# & Unity
- Worked with an undergraduate partner on a project examining the use of augmented reality headsets
in activity recognition algorithms, by analyzing data on user focus and gaze

#### [AVAIL Lab](https://avail.umbc.edu): Undergraduate Research Assistant in VR/Machine Learning
_UMBC Computer Science & Electrical Engineering Dept. - Baltimore, MD_  
Mar. 2019 - May 2020  
**machine learning, computer vision, assistive robotics, python, C++**
- Research assistant in UMBC’s [AVAIL](https://avail.umbc.edu) and [IRAL](http://iral.cs.umbc.edu) labs. Working full-time primarily with Drs. Don Engel and Cynthia Matuszek in AVAIL on assistive robotics and VR data visualization
- Duties include primary upkeep of UMBC’s motion capture VICON lab, and work involving the development of VR simulations to develop language algorithms for robots
- Worked with a team of graduate students on Human-Robot Interaction research
`;

class Experience extends Component {
    render () {
        return (
            <div>
                <Contents id="experience">
                    <ReactMarkdown source={edu_markdown} />
                </Contents>
                <Contents id="work">
                    <ReactMarkdown source={work_markdown} />
                </Contents>
            </div>
        );
    }
}

export default Experience;