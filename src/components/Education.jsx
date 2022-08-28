import styled from 'styled-components';
import { useState, useEffect } from "react";
import { getEducation } from '../dao/Education-dao';
import { convertTimestampToString } from '../common/commonUtil';

const EducationContent = styled.div`
  padding: ${props => props.theme.contentPadding};
  .colleague-container{
    width: 100%;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
      display: block;
    };
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      display: flex;
    };
  };
  .colleague-detail{
    display: block;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
      width: 100%;
    };
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      width: 70%;
    };
  };
  .colleague-name{
    font-weight: bold;
  };
  .profession-name{
    font-style: italic;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
      padding-left: 0;
    };
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      padding-left: 10px;
    };
  };
  .study-period{
    text-align: right;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
      width: 100%;
    };
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      width: 30%;
    };
  };

`;

export const Education = (props) => {

  const [education, setEducation] = useState();

  useEffect(() => {
    getEducation().then((res) => setEducation(res))
  }, [])

  return (
    <EducationContent>
    <div id='Education'>
      <h1>Education</h1>
      {education && education.map((educationItem, index) => 
        <div className="colleague-container" key={`${educationItem.colleagueName}-${index}`}>
          <div className="colleague-detail">
            <div className="colleague-name"><h3><strong>{educationItem.colleagueName}</strong></h3></div>
            <div className="profession-name"><h4>{educationItem.professionName}</h4></div>
          </div>
          <div className="study-period">
            <h3>{`${convertTimestampToString(educationItem.startTime)}-${convertTimestampToString(educationItem.endTime)}`}</h3>
          </div>
          
        </div>
      )}

    </div>
    </EducationContent>
  )
}
