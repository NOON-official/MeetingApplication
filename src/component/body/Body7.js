import * as React from 'react';
import { Container, MobileBox, StyledDiv, StyledText, ButtonBox } from '../Elements/StyledComponent';
import Face from '../Characters/Face';
import { Character } from '../Characters/CharacterButton';
import Moderatoer from '../Characters/Moderatoer';
import Comedian from '../Characters/Comedian';
import Nerd from '../Characters/Nerd';
const Body7 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position=" absolute" size="35px" color="#F49393" left="10px">
            미팅 나갈 구성원
          </StyledText>
          <StyledText position="absolute" size="35px" left="163px">
            을
          </StyledText>
          <StyledText position="absolute" size="35px" left="10px" top="30px">
            알려주세요!
          </StyledText>
        </StyledDiv>
        <ButtonBox top={'18%'}>
          <Character character={'비주얼'}>비주얼</Character>
          <Character character={'사회자'}>사회자</Character>
          <Character character={'개그맨'}>개그맨</Character>
          <Character character={'깍두기'}>깍두기</Character>
        </ButtonBox>
        <StyledDiv top="30%" width="95%" height="70%" left="50%" overflow="scroll">
          <StyledDiv width="95%" height="210%" left="50%">
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
