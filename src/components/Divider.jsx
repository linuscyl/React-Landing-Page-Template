import styled from 'styled-components';

const DividerContent = styled.div`
  padding: ${props => props.theme.contentPadding};
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    height: 2rem;
  };
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 66px;
  };
`;

export const Divider = (props) => {
  return (
    <DividerContent>
      <img src="img/divider.svg" alt=""/>
    </DividerContent>
  )
}
