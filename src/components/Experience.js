
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
                date="2020 - present"
                iconStyle={{ background: '#f9ab00', color: '#fff', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Freelancer</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2020"
                iconStyle={{ background: '#f9ab00', color: '#f9ab00', width: "1.625rem", height: "1.625rem", marginLeft: "-0.8125rem" }}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Full Stack developer</h4>
                <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019"
                iconStyle={{ background: '#f9ab00', color: '#fff', width: "1.625rem", height: "1.625rem" , marginLeft: "-0.8125rem"}}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Front end web developer</h4>
                <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2016 - 2019"
                iconStyle={{ background: '#f9ab00', color: '#fff', width: "1.625rem", height: "1.625rem" , marginLeft: "-0.8125rem"}}
                // icon={<WorkIcon />}
            >
                <h4 className="vertical-timeline-element-title">Web Designer</h4>
                <p>
                User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>  
        </div>
    )
}

export default Experience
