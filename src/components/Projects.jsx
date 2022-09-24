import { useState, useEffect } from "react";
import styled from 'styled-components';
import { getProjects } from "../dao/WorkingExperience-dao";
import { convertTimestampToString } from "../common/commonUtil";
import Lightbox from "react-awesome-lightbox";
import ReactPlayer from 'react-player/youtube'

const ProjectsContent = styled.div`
  padding: ${props => props.theme.contentPadding};
  .job-duties-unorder-list{
    list-style-type: disc;
  };
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
      height: fit-content
    };
    .project-thumbnail{
      width: auto;
      height: 150px;
      max-width: 250px;
      cursor: pointer;
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
      border-left: 1px solid #CFCFCF;
    };
  };
  .project-target-url{
    padding-top: 2rem;
  }
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
  const [projects, setProjects] = useState(initProjectData);
  const [isOpenLightBox, setisOpenLightBox] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const companyId = queryParams.get('companyId');
    getProjects(companyId).then((res) => setProjects(res))
  }, []);

  const getThumbnail = (project) => {
    switch (project.thumbnailType) {
      case "Image":
        if(isOpenLightBox){
          return <Lightbox images={project.projectThumbnails} doubleClickZoom={0} onClose={()=>setisOpenLightBox(false)}></Lightbox>
        } else {
          return <img className="project-thumbnail" src={project.projectThumbnails[0]['url']} alt={project.projectName} onClick={()=>setisOpenLightBox(true)}/>
        }
  
      case "Youtube":
        return <ReactPlayer url={project.projectThumbnails[0]} width="auto" height="auto" controls={true} />
  
      case "Video":
        return <img className="project-thumbnail" src={project.projectThumbnails} alt={project.projectName} />
  
      default:
        return <img className="project-thumbnail" src={project.projectThumbnails} alt={project.projectName} />
    }
  }
  
  return (
    <ProjectsContent>
      <h1>Company Name: {projects.companyName}</h1>
      <h3>Period: {convertTimestampToString(projects.startTime)} - {convertTimestampToString(projects.endTime)}</h3>
      <h3>Title: {projects.title}</h3>
      <h3>Job Duty:</h3>
      <ul className="job-duties-unorder-list">
        {projects.jobDuties && projects.jobDuties.map((jobDuty) => 
           <li key={`${jobDuty}-key`}>{jobDuty}</li>
        )}
      </ul>
      {projects && projects.projects && projects.projects.map((project) => 
        <div className="project-content-container" key={project.projectId}>
        <div className="project-thumbnail-container">
          <div className="project-thumbnail">{getThumbnail(project)}</div>
        </div>
        <div className="project-detail">
          <div className="project-name">
            <h3>{project.projectName}</h3>
          </div>
          <div className="project-description">{project.projectDescription}</div>
          <div className="project-target-url">
            <a href={project.targetUrl} alt="" target="_blank" rel="noreferrer">
              {project.targetUrl}
            </a>
          </div>
        </div>
      </div>
    )}
    </ProjectsContent>
  )
}
