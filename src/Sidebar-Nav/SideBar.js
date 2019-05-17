import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Arrow from '../Arrow';

const StyledLink = styled(Link)`
  &:hover {
    cursor: pointer;
    color: maroon;
  }
  color: black;
  text-decoration: none;
`;

const Li = styled.li`
  &:hover {
    cursor: pointer;
    color: maroon;
  }
  margin: 16px;
`;

const SideBar = ({ workspaceId, history }) => {
  const toDocuments = `/workspaces/${workspaceId}/documents`;
  const toParticipants = `/workspaces/${workspaceId}/participants`;
  const backToWorkspaceList = '/workspaces';
  return (
    <>
      <div>
        <Arrow>&#8592;</Arrow>
        <StyledLink to={backToWorkspaceList}>Back to Workspaces</StyledLink>
      </div>
      <Li>
        <StyledLink to={toDocuments}>Documents</StyledLink>
      </Li>
      <Li>Settlements</Li>
      <Li>
        <StyledLink to={toParticipants}>Participants</StyledLink>
      </Li>
    </>
  );
};

export default SideBar;
