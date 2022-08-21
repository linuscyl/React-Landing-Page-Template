import styled from 'styled-components';
import { Link } from "react-router-dom";

const PageNotFoundContent = styled.div`
  display:block;
  text-align: center;
`;

export const NotFoundPage = (props) => {
  return (
    <PageNotFoundContent>
      <h1>Sorry Page not found</h1>
      <Link to={`/`}><h3>{`>>Click here page to home Page<<`}</h3></Link>
    </PageNotFoundContent>
  )
}
