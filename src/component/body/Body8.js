import * as React from 'react';
import styled from 'styled-components';
import { UnivSelect, AgeSelect, JobSelect } from '../Elements/PrefferedSelect';

import { ReactComponent as Character } from '../../Asset/page2/Character.svg';
import { Container, MobileBox, StyledDiv, StyledText } from '../Elements/StyledComponent';
import PrefferedUnivBox from '../Universities/PrefferedUnivBox';
const PrefferedTeamSelectBox = styled.div`
  height: 70%;
  width: 95%;
  position: absolute;
  top: 10%;
`;
const Body8 = () => {
  return (
    <Container bg=" #F5F5F5">
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position=" absolute" size="35px" color="#F49393" left="10px">
            어떤 상대방을
          </StyledText>
          <StyledText position="absolute" size="35px" left="150px">
            원하시나요?
          </StyledText>
        </StyledDiv>
        <PrefferedTeamSelectBox>
          <JobSelect />
          <AgeSelect />
          <UnivSelect />
        </PrefferedTeamSelectBox>
        <StyledDiv
          display="flex"
          justify_content="flex-end"
          align_item="flex-end"
          top="80%"
          height="auto"
          width="100%"
          left="40%"
          margin
        >
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body8;
