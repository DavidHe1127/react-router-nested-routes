import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
} from 'react-router-dom';

import SideBarContainer from './SideBarContainer';
import Arrow from '../Arrow';
import MainContainer from './MainContainer';

import DocumentMain from './Document/Main';

const Li = styled.li`
    &:hover {
        cursor: pointer;
        color: maroon;
    }
    margin: 16px;
`;

const StyledLink = styled(Link)`
    &:hover {
        cursor: pointer;
        color: maroon;
    }
    color: black;
    text-decoration: none;
`;

const Content = styled.div`
    display: block;
    margin-left: 300px;
`;

const WorkspaceSideBar = ({ workspaceId, history }) => {
    const to = `/workspaces/${workspaceId}/documents`;
    const backToWorkspaceList = '/workspaces';
    return (
        <>
            <div>
                <Arrow>&#8592;</Arrow>
                <StyledLink to={backToWorkspaceList}>
                    Back to Workspaces
                </StyledLink>
            </div>
            <Li>
                <StyledLink to={to}>Documents</StyledLink>
            </Li>
            <Li>Settlements</Li>
            <Li>Participants</Li>
        </>
    );
};

const ListWorkspaces = ({ history, ...rest }) => {
    const style = {
        display: 'inline-block',
        margin: 40,
        border: '1px solid red',
        width: 300,
        height: 250,
        background: 'tomato',
    };

    function click(e) {
        history.push(
            [rest.location.pathname, e.currentTarget.dataset.id].join('/')
        );
    }

    return (
        <>
            {workspaces.sidebar}
            <Content>
                <div style={style}>
                    <ul>
                        <Li data-id={1} onClick={click}>
                            workspace 1
                        </Li>
                        <Li data-id={2} onClick={click}>
                            workspace 2
                        </Li>
                        <Li data-id={3} onClick={click}>
                            workspace 3
                        </Li>
                    </ul>
                </div>
            </Content>
        </>
    );
};

const workspaces = {
    // sidebar: () => <div />,
    main: ListWorkspaces,
};

const WorkspaceMain = props => {
    const {
        match: {
            params: { id },
        },
        history: { goBack },
    } = props;

    const style = {
        margin: 40,
        border: '1px solid orange',
        height: 100,
        background: 'tomato',
        marginLeft: 300,
    };

    const s1 = {
        marginTop: 50,
    };

    return (
        <>
            <div style={style}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Workspace#{id} Summary</h2>
                </div>
            </div>
        </>
    );
};

const workspace = {
    SideBar: WorkspaceSideBar,
    Main: WorkspaceMain,
};

const Workspace = props => {
    const {
        match: {
            params: { id: workspaceId },
        },
        history,
    } = props;

    return (
        <>
            <SideBarContainer>
                <workspace.SideBar
                    history={history}
                    workspaceId={workspaceId}
                />
            </SideBarContainer>
            <MainContainer>
                <workspace.Main {...props} />
            </MainContainer>
        </>
    );
};

const documents = {
    SideBar: WorkspaceSideBar,
    Main: ({ workspaceId }) => {
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
    },
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
                <documents.SideBar
                    history={history}
                    workspaceId={workspaceId}
                />
            </SideBarContainer>
            <MainContainer>
                <documents.Main workspaceId={workspaceId} />
            </MainContainer>
        </>
    );
};

const document = {
    Main: ({ documentId }) => (
        <div>
            <div>Document#{documentId} Summary</div>
        </div>
    ),
};

const Document = props => {
    const {
        match: {
            params: { id: workspaceId, documentId },
        },
        history,
    } = props;

    return (
        <>
            <SideBarContainer>
                <WorkspaceSideBar history={history} workspaceId={workspaceId} />
            </SideBarContainer>
            <MainContainer>
                <DocumentMain documentId={documentId} />
            </MainContainer>
        </>
    );
};

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/workspaces"
                        component={workspaces.main}
                    />
                    <Route exact path="/workspaces/:id" component={Workspace} />
                    <Route
                        exact
                        path="/workspaces/:id/documents"
                        component={Documents}
                    />
                    <Route
                        exact
                        path="/workspaces/:id/documents/:documentId"
                        component={Document}
                    />
                    <Route
                        path="/"
                        render={() => (
                            <div>
                                <h3>Dashboard page</h3>
                                <NavLink to="/workspaces">
                                    Goto to workspaces
                                </NavLink>
                            </div>
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
