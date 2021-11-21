
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
                date="Aug 2021 - Nov 2021"
                iconStyle={{ background: '#f9ab00', color: '#fff', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">IOTFY Solution Pvt Ltd.</h4>
                <p>
                Developing and maintaining the Dashboard website, front and back-end functionality of the website produce clean code that follows the design and functional specifications.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="March 2021 - july 2021"
                iconStyle={{ background: '#f9ab00', color: '#f9ab00', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Kaamcube Service Pvt Ltd.</h4>
                <p>
                Worked on a B2B project as MERN Stack Developer for Delhi based Client. design and create multiple layers of applications while working cross-functionally across different infrastructures.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2021 - Mar 2021"
                iconStyle={{ background: '#f9ab00', color: '#f9ab00', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">DUCAT</h4>
                <p>
                DUCAT cartified MERN Stack developer. 
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2016 - 2019"
                iconStyle={{ background: '#f9ab00', color: '#fff', width: "1.625rem", height: "1.625rem" , marginLeft: "-0.8125rem"}}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Diploma </h4>
                <p>
                Computer Engneering Persued from Guru Nanak Dev Institute of Technology.
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>  
        </div>
    )
}

export default Experience
