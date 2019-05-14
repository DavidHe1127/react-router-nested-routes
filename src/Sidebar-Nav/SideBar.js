import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const SideBar = ({ workspaceId }) => {
  const to = `/workspaces/${workspaceId}/documents`;

  return (
    <>
      <Li>
        <StyledLink to={to}>Documents</StyledLink>
      </Li>
      <Li>Settlements</Li>
      <Li>Participants</Li>
    </>
  );
};

export default SideBar;
