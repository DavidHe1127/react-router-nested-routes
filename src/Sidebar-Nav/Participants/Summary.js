import React from 'react';

import SideBarContainer from '../SideBarContainer';
import MainContainer from '../MainContainer';

import SideBar from '../SideBar';

const Main = () => (
  <div>
    <div>Seller Solicitor</div>
    <div>Buyer Solicitor</div>
  </div>
);

const Participants = ({history}) => {

  const workspaceId = '11';

  return (
    <>
      <SideBarContainer>
        <SideBar history={history} workspaceId={workspaceId} />
      </SideBarContainer>
      <MainContainer>
        <Main />
      </MainContainer>
    </>
  );
};

export default Participants;
