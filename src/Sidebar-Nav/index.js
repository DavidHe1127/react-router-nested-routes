import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';

const SideBar = styled.div`
    bottom: 0px;
    display: block;
    font-size: 13px;
    height: 100vh;
    left: 0px;
    position: fixed;
    top: 0px;
    width: 250px;
    background: rgb(238, 238, 238);
    overflow: auto;
`;

const Li = styled.li`
    &:hover {
        cursor: pointer;
        color: #fff;
    }
`;

const Content = styled.div`
    display: block;
    margin-left: 250px;
`;

const ListWorkspaces = ({ history, ...rest }) => {
    const style = {
        display: 'inline-block',
        margin: 40,
        border: '1px solid red',
        width: 150,
        height: 100,
        background: 'tomato',
    };

    function click(e) {
        history.push(
            [rest.location.pathname, e.currentTarget.dataset.id].join('/')
        );
    }

    return (
        <>
            <SideBar>{workspaces.sidebar}</SideBar>
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
    sidebar: () => <div />,
    main: ListWorkspaces,
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
                    {/* <Route path="/workspaces/:id" component={Workspace} /> */}
                    {/* <Route exact path="/workspaces/:id" component={WorkspaceSummary} /> */}
                    {/* <Route */}
                    {/*   exact */}
                    {/*   path="/workspaces/:workspaceId/documents" */}
                    {/*   component={ListDocuments} */}
                    {/* /> */}
                    {/* <Route */}
                    {/*   exact */}
                    {/*   path="/workspaces/:workspaceId/documents/new" */}
                    {/*   component={AddDocument} */}
                    {/* /> */}
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
