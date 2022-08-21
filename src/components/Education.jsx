import styled from 'styled-components';

const EducationContent = styled.div`
  padding: ${props => props.theme.contentPadding};

`;

export const Education = (props) => {
  return (
    <EducationContent>
    <div id='Education'>
      <h1>Education</h1>
      
    </div>
    </EducationContent>
  )
}
