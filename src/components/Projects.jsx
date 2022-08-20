import { useState, useEffect } from "react";
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { getProjects } from "../dao/WorkingExperience-dao";
import * as dayjs from 'dayjs'

const ProjectsContent = styled.div`
  .project-content-container{
    ${breakpoint('xs')`
      display: block;
    `};
    ${breakpoint('md')`
      display: flex;
    `}
  };
  .project-thumbnail-container{
    display: flex;
    justify-content: center;
    ${breakpoint('xs')`
      width:100%;
    `};
    ${breakpoint('md')`
      width: 40%;
      border-right: 1px solid #CFCFCF;
    `}
    .project-thumbnail{
      width: 100%;
      max-width: 250px;
    }
  };
  .project-detail{
    display: block;
    padding: 0 2rem;
    ${breakpoint('xs')`
      width:100%;
    `};
    ${breakpoint('md')`
      width:60%;
    `}
  };
`;

export const Projects = (props) => {
  const [projects, setProjects] = useState({})

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const companyId = queryParams.get('companyId');
    getProjects(companyId).then((res) => setProjects(res))
  }, []);

 const convertTimestampToString = (timestamp) =>{
   return dayjs.unix(timestamp).format('MMM YYYY');
 };

  // const startDate = new Date(projects.startTime);
  // console.log('startDate', startDate).format("MMM YYYY")
  
  
  return (
    <ProjectsContent>
      <h1>Company Name: {projects.companyName}</h1>
      <h3>Period: {convertTimestampToString(projects.startTime)} - {convertTimestampToString(projects.endTime)}</h3>
      <h3>Title: {projects.title}</h3>
      <h3>Job Duty: {projects.jobDuty}</h3>
      <div className="project-content-container">
        <div className="project-thumbnail-container">
          <img className="project-thumbnail" src="https://d34ykkb6gsf3mq.cloudfront.net/images/company-icon/Ceevo.png" alt="" />
        </div>
        <div className="project-detail">
          <div className="project-name">
            <h3>Project Name</h3>
          </div>
          <div className="project-description">description</div>
        </div>
      </div>

    </ProjectsContent>
  )
}
