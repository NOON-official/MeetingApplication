import * as React from 'react';
import styled from 'styled-components';
import { UnivSelect, AgeSelect, JobSelect } from '../Elements/PrefferedSelect';

import { ReactComponent as Character } from '../../Asset/page2/Character.svg';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

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
        <StyledDiv display="flex" direction="column" top="5%" width="90%" height="15%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%">
            {/* TitleBox*/}
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0" margin="0 0 0 10px">
              {/* TextTitle*/}
              <StyledText position="static" color="#F49393" size="1em">
                어떤 상대팀
              </StyledText>
              <StyledText position=" static" size="1em">
                을 원하시나요?
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
              <StyledText position="static" weight="400" size="1em" font="Nanum JungHagSaeng" color="#BBBBBB">
                7/9
              </StyledText>
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            position="static"
            display="flex"
            direction="row"
            transform="0"
            width="100%"
            size="13px"
            margin="0 0 0 10px"
          >
            <StyledText position="static" weight="400" size="1em" font="Pretendard" color="#AAAAAA">
              중복 선택이 가능해요
            </StyledText>
            <SubTitle weight="400" size="13px" font="Pretendard" color="#AAAAAA" left="28%" top="50%"></SubTitle>
          </StyledDiv>
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
