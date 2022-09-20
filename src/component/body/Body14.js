import { StyledDiv, Container, MobileBox, StyledText } from '../Elements/StyledComponent';
import React from 'react';
import { ReactComponent as Star } from '../../Asset/finalPage/1.svg';
import { ReactComponent as StarYellow } from '../../Asset/finalPage/2.svg';
import { ReactComponent as Heart } from '../../Asset/finalPage/3.svg';
import { ReactComponent as Character } from '../../Asset/finalPage/4.svg';
import KakaoLogin from '../Auth/KakaoLogin';

const Body14 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="10%" height="50%" left="50%" width="90%">
          <StyledDiv left="70%">
            <Star />
          </StyledDiv>
          <StyledDiv top="75%" left="20%">
            <StarYellow />
          </StyledDiv>
          <StyledDiv top="15%" left="20%">
            <Heart />
          </StyledDiv>
          <StyledDiv top="30%" left="50%">
            <Character />
          </StyledDiv>
        </StyledDiv>
        <StyledDiv top="65%" width="90%" height="10%" left="50%">
          <StyledText position="absolute" size="22px" left="20%">
            카카오톡으로 매칭 결과를 보내드려요.
          </StyledText>
        </StyledDiv>
        
          <StyledDiv height="auto"  top="85%" width="auto" left="50%">
            <KakaoLogin />
          </StyledDiv>
        
      </MobileBox>
    </Container>
  );
};
export default Body14;
