import * as React from 'react';
import styled from 'styled-components';
import { GenderSelect, NumberSelect, AgeSelect, JobSelect } from '../Elements/GenderSelec';
import { ReactComponent as Character } from '../../Asset/page2/Character.svg';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';
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
        <StyledDiv display="flex" direction="row" top="5%" width="90%" height="auto" left="50%">
          <StyledText position="static" color="#F49393" size="35px">
            우리 팀을 소개
          </StyledText>
          <StyledText position=" static" size="35px">
            해주세요
          </StyledText>
          <SubTitle weight="400" size="20px" font="Nanum JungHagSaeng" color="#BBBBBB" left="70%" top="30%">
            1/9
          </SubTitle>
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
