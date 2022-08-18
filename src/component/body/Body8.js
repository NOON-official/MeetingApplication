import * as React from 'react';
import styled from 'styled-components';
import { UnivSelect, AgeSelect, JobSelect } from '../Elements/PrefferedSelect';

import { ReactComponent as Character } from '../../Asset/page2/Character.svg';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';
import PrefferedUnivBox from '../Universities/PrefferedUnivBox';
const PrefferedTeamSelectBox = styled.div`
  height: 70%;
  width: 90%;
  position: absolute;
  top: 17%;
  margin: 5px;
`;
const Body8 = () => {
  return (
    <Container bg=" #F5F5F5">
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position=" absolute" size="35px" color="#F49393" left="10px">
            어떤 상대팀
          </StyledText>
          <StyledText position="absolute" size="35px" left="120px">
            을 원하시나요?
          </StyledText>
          <SubTitle weight="400" size="20px" font="Nanum JungHagSaeng" color="#BBBBBB" left="300px" top="15px">
            7/9
          </SubTitle>
          <SubTitle weight="400" size="13px" font="Pretendard" color="#AAAAAA" left="18%" top="40%">
            중복 선택이 가능해요
          </SubTitle>
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
