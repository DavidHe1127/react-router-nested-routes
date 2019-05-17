import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SideBarContainer from '../SideBarContainer';
import MainContainer from '../MainContainer';

import SideBar from '../SideBar';

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

const Main = ({ workspaceId }) => {
    const to1 = `/workspaces/${workspaceId}/documents/1`;
    const to2 = `/workspaces/${workspaceId}/documents/2`;
    const to3 = `/workspaces/${workspaceId}/documents/3`;

    return (
        <div>
            <h4>Documents List</h4>
            <Li>
                <StyledLink to={to1}>Doc 1</StyledLink>
            </Li>
            <Li>
                <StyledLink to={to2}>Doc 2</StyledLink>
            </Li>
            <Li>
                <StyledLink to={to3}>Doc 3</StyledLink>
            </Li>
        </div>
    );
};

const Documents = props => {
    const {
        match: {
            params: { id: workspaceId },
        },
        history,
    } = props;

    return (
        <>
            <SideBarContainer>
                <SideBar history={history} workspaceId={workspaceId} />
            </SideBarContainer>
            <MainContainer>
                <Main workspaceId={workspaceId} />
            </MainContainer>
        </>
    );
};

export default Documents;

