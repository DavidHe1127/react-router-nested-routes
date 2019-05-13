import React from 'react';
import { withRouter } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';
import 'react-tabs/style/react-tabs.css';

import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

const Li = styled.li`
  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;

const Arrow = styled.span`
  color: black;
  height: 20px;
  width: 20px;
  &:hover {
    cursor: pointer;
    color: #fff;
  }
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
    <div style={style}>
      <ul>
        <Li data-id={1} onClick={click}>
          Workspace 1
        </Li>
        <Li data-id={2} onClick={click}>
          Workspace 2
        </Li>
        <Li data-id={3} onClick={click}>
          Workspace 3
        </Li>
      </ul>
    </div>
  );
};

const Documents = withRouter(({ history, location }) => {
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
      [location.pathname, 'documents', e.currentTarget.dataset.id].join('/')
    );
  }

  return (
    <div style={style}>
      <ul>
        <Li data-id={1} onClick={click}>
          Doc 1
        </Li>
        <Li data-id={2} onClick={click}>
          Doc 2
        </Li>
        <Li data-id={3} onClick={click}>
          Doc 3
        </Li>
      </ul>
    </div>
  );
});

const Workspace = props => {
  const {
    match: {
      params: { id },
    },
    history: { goBack },
  } = props;

  const style = {
    margin: 40,
    border: '1px solid orange',
    width: '80%',
    height: 100,
    background: 'tomato',
  };

  const s1 = {
    marginTop: 50,
  };

  return (
    <div style={style}>
      <div style={{ textAlign: 'left' }}>
        <Arrow onClick={goBack}>&#8592;</Arrow>
      </div>
      <h2>Workspace#{id} Summary</h2>

      <div style={s1}>
        <Tabs>
          <TabList>
            <Tab>Documents</Tab>
            <Tab>Settlements</Tab>
          </TabList>
          <TabPanel>
            <Switch>
              <Route
                exact
                path="/workspaces/:id/documents/:documentId"
                component={Document}
              />
              <Route path="/workspaces/:id" component={Documents} />
            </Switch>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

function Document({ match, history }) {
  const documentId = match.params.documentId;

  const style = {
    margin: 40,
    border: '1px solid red',
    width: 100,
    height: 100,
    background: 'darkorange',
  };

  const onClick = () => {
    history.goBack();
  };

  return (
    <div style={style}>
      <div style={{ textAlign: 'left' }}>
        <Arrow onClick={onClick}>&#8592;</Arrow>
      </div>
      Document {documentId}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/workspaces" component={ListWorkspaces} />
          <Route path="/workspaces/:id" component={Workspace} />
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
                <NavLink to="/workspaces">Goto to workspaces</NavLink>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
