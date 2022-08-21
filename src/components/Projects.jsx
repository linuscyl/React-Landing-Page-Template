import { useState, useEffect } from "react";
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import { getProjects } from "../dao/WorkingExperience-dao";
import * as dayjs from 'dayjs'

const ProjectsContent = styled.div`
  padding: ${props => props.theme.contentPadding};
  .project-content-container{
    margin: 20px auto;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
      display: block;
    };
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      display: flex;
    };
  };
  .project-thumbnail-container{
    display: flex;
    justify-content: center;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
      width:100%;
    };
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      width: 40%;
      border-right: 1px solid #CFCFCF;
    };
    .project-thumbnail{
      width: 100%;
      max-width: 250px;
    }
  };
  .project-detail{
    display: block;
    padding: 0 2rem;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
      width:100%;
    };
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      width:60%;
    };
  };
`;

const initProjectData ={
  "companyName": "",
  "companyId": "",
  "companyDescription": "",
  "startTime": null,
  "endTime": null,
  "title": "",
  "jobDuty": "",
  "projects":[{
      "projectId": "1",
      "projectThumbnail": "",
      "projectName": "",
      "projectDescription": ""
  }
  ]
}

export const Projects = (props) => {
  const [projects, setProjects] = useState(initProjectData)

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const companyId = queryParams.get('companyId');
    getProjects(companyId).then((res) => setProjects(res))
  }, []);

 const convertTimestampToString = (timestamp) =>{
   return dayjs.unix(timestamp).format('MMM YYYY');
 };
  
  return (
    <ProjectsContent>
      <h1>Company Name: {projects.companyName}</h1>
      <h3>Period: {convertTimestampToString(projects.startTime)} - {convertTimestampToString(projects.endTime)}</h3>
      <h3>Title: {projects.title}</h3>
      <h3>Job Duty: {projects.jobDuty}</h3>
      {projects.projects.map((project) => 
        <div className="project-content-container" key={project.projectId}>
        <div className="project-thumbnail-container">
          <img className="project-thumbnail" src={project.projectThumbnail} alt={project.projectName} />
        </div>
        <div className="project-detail">
          <div className="project-name">
            <h3>{project.projectName}</h3>
          </div>
          <div className="project-description">{project.projectDescription}</div>
        </div>
      </div>
    )}
    </ProjectsContent>
  )
}
