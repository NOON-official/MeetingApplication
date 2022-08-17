import * as React from 'react';
import styled from 'styled-components';
import { GenderSelect, NumberSelect, AgeSelect, JobSelect } from '../Elements/GenderSelec';

import { ReactComponent as Character } from '../../Asset/page2/Character.svg';
import { Container, MobileBox, StyledDiv, StyledText } from '../Elements/StyledComponent';
const TeamSelectBox = styled.div`
  height: 70%;
  width: 90%;
  position: absolute;
  top: 10%;
`;
const Body2 = () => {
  return (
    <Container bg=" #F5F5F5">
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position="absolute" color="#F49393" size="35px" left="10px">
            우리 팀을 소개
          </StyledText>
          <StyledText position=" absolute" size="35px" left="135px">
            해주세요
          </StyledText>
        </StyledDiv>
        <TeamSelectBox>
          <GenderSelect />
          <NumberSelect />
          <AgeSelect />
          <JobSelect />
        </TeamSelectBox>
        <StyledDiv
          display="flex"
          direction="row"
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
export default Body2;
