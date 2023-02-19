import { useState, useEffect } from "react";
import { getWorkingExperience } from "../dao/WorkingExperience-dao";
import styled from 'styled-components';
import {
  Link
} from "react-router-dom";

const WorkingExperienceContent = styled.div`
  padding: ${props => props.theme.contentPadding};
  .row{
    display: flex;
    justify-content: center;
  };
  .wrap-cards{
    flex-wrap: wrap
  };
  .thumbnail{
    cursor: pointer;
    box-shadow:1px 3px 5px -3px ${props => props.theme.paletter.grey};
  };
  .company-name{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const getCompanyLogoPath = (companyName) =>{
  return process.env.REACT_APP_S3_ASSET_URL + `images/company-icon/${companyName}.png`
} 

export const WorkingExperience = (props) => {
  const [workingExperiences, setWorkingExperiences] = useState();

  useEffect(() => {
    getWorkingExperience().then((res) => setWorkingExperiences(res))
  }, [])
  
  return (
    <WorkingExperienceContent>
      <div id="WorkingExperience">
        <h1>Working Expeience</h1>
        <div className="container">
          <div className="row wrap-cards">
            {workingExperiences && workingExperiences.map((workingExperience) =>
              <div className="col-xs-8 col-sm-6 col-md-4" key={workingExperience.companyId}>
                <Link to={`projects?companyId=${workingExperience.companyId}`}>
                  <div className="thumbnail">
                    <img src={getCompanyLogoPath(workingExperience.companyName)} alt="placeholder" />
                    <div className="caption">
                      <h3 className="company-name">{workingExperience.companyName}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </WorkingExperienceContent>
  )
}
