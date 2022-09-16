import * as React from 'react';
import { Container, MobileBox, StyledDiv, StyledText, ButtonBox, SubTitle } from '../Elements/StyledComponent';
import Face from '../Characters/Face';
import { Character } from '../Characters/CharacterButton';
import Moderatoer from '../Characters/Moderatoer';
import Comedian from '../Characters/Comedian';
import Nerd from '../Characters/Nerd';
const Body7 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv display="flex" direction="column" top="2%" width="90%" height="15%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv
            position="static"
            display="flex"
            direction="column"
            transform="0"
            width="100%"
            margin="5px 0 0 10px"
          >
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0" width="100%">
              <StyledText position=" static" size="0.8em" color="#F49393">
                미팅 나갈 구성원
              </StyledText>
              <StyledText position=" static" size="0.8em">
                을
              </StyledText>
            </StyledDiv>
            <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%">
              {/* TitleBox*/}
              <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
                {/* TextTitle*/}

                <StyledText position=" static" size="0.8em">
                  알려주세요
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
                  6/9
                </StyledText>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            position="static"
            display="flex"
            direction="row"
            margin=" 0 0 0"
            transform="0"
            width="100%"
            size="13px"
          ></StyledDiv>
        </StyledDiv>

        <ButtonBox top={'18%'}>
          <Character character={'비주얼'} />
          <Character character={'사회자'} />
          <Character character={'개그맨'} />
          <Character character={'깍두기'} />
        </ButtonBox>
        <StyledDiv top="33%" width="95%" height="65%" left="50%" overflow="scroll">
          <StyledDiv width="95%" height="250%" left="50%" minHeight="1250px">
            <Face />
            <Moderatoer />
            <Comedian />
            <Nerd />
          </StyledDiv>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body7;
