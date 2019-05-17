import React from 'react';

import SideBarContainer from '../SideBarContainer';
import MainContainer from '../MainContainer';

import SideBar from '../SideBar';

const Main = ({ documentId }) => (
  <div>
    <div>Document#{documentId} Summary</div>
  </div>
);

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
                <SideBar history={history} workspaceId={workspaceId} />
            </SideBarContainer>
            <MainContainer>
                <Main documentId={documentId} />
            </MainContainer>
        </>
    );
};

export default Document;
