
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "../App.css"

const Experience = () => {
    return (
        <div id="e" className="bg-secondary">
            <h2 className="text-center text-warning py-4">EXPERIENCE</h2>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid #fff' }}
<<<<<<< HEAD
                date="Aug 2021 - Nov 2021"
                iconStyle={{ background: '#f9ab00', color: '#fff', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">IOTFY Solution Pvt Ltd.</h4>
                <p>
                Developing and maintaining the Dashboard website, front and back-end functionality of the website produce clean code that follows the design and functional specifications.
=======
                date="2020 - present"
                iconStyle={{ background: '#f9ab00', color: '#fff', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Freelancer</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
<<<<<<< HEAD
                date="March 2021 - july 2021"
                iconStyle={{ background: '#f9ab00', color: '#f9ab00', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Kaamcube Service Pvt Ltd.</h4>
                <p>
                Worked on a B2B project as MERN Stack Developer for Delhi based Client. design and create multiple layers of applications while working cross-functionally across different infrastructures.
=======
                date="2019 - 2020"
                iconStyle={{ background: '#f9ab00', color: '#f9ab00', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Full Stack developer</h4>
                <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
<<<<<<< HEAD
                date="Jan 2021 - Mar 2021"
                iconStyle={{ background: '#f9ab00', color: '#f9ab00', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">DUCAT</h4>
                <p>
                DUCAT cartified MERN Stack developer. 
                </p>
            </VerticalTimelineElement>
            
=======
                date="2019"
                iconStyle={{ background: '#f9ab00', color: '#fff', width: "1.625rem", height: "1.625rem" , marginLeft: "-0.8125rem"}}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Front end web developer</h4>
                <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2016 - 2019"
                iconStyle={{ background: '#f9ab00', color: '#fff', width: "1.625rem", height: "1.625rem" , marginLeft: "-0.8125rem"}}
                // icon={<WorkIcon />}
            >
<<<<<<< HEAD
                <h4 className="vertical-timeline-element-title">Diploma </h4>
                <p>
                Computer Engneering Persued from Guru Nanak Dev Institute of Technology.
=======
                <h4 className="vertical-timeline-element-title">Web Designer</h4>
                <p>
                User Experience, Visual Design
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>  
        </div>
    )
}

export default Experience
