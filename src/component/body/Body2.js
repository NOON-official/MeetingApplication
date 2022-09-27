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
        <StyledDiv display="flex" direction="column" top="3%" width="90%" height="10%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%" margin="0 0 0 10px">
            {/* TitleBox*/}
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
              {/* TextTitle*/}
              <StyledText position="static" color="#F49393" size="0.8em">
                우리 팀을 소개
              </StyledText>
              <StyledText position=" static" size="0.8em">
                해주세요
              </StyledText>
            </StyledDiv>
            <StyledDiv
              position="static"
              transform="0"
              direction="row"
              size="20px"
              justify_content="center"
              align_item="center"
              margin=" 10px 0 0 10px"
            >
              {/*TextNumber*/}
              <StyledText position="static" weight="400" size="0.8em" font="Nanum JungHagSaeng" color="#BBBBBB">
                1/9
              </StyledText>
            </StyledDiv>
          </StyledDiv>
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
