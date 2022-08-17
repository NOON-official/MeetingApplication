import { StyledDiv, Container, MobileBox, StyledText } from '../Elements/StyledComponent';
import React from 'react';
import { ReactComponent as Star } from '../../Asset/finalPage/1.svg';
import { ReactComponent as StarYellow } from '../../Asset/finalPage/2.svg';
import { ReactComponent as Heart } from '../../Asset/finalPage/3.svg';
import { ReactComponent as Character } from '../../Asset/finalPage/4.svg';
import KakaoLogin from '../Auth/KakaoLogin';
import DataPush from '../Elements/DataPush';

const Body14 = () => {
  //데이터 보내기*/

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
          <StyledText position="absolute" size="25px" left="15%">
            카카오톡으로 매칭 결과를 보내드려요.
          </StyledText>
        </StyledDiv>
        {window.sessionStorage.getItem('access') == null ? (
          <StyledDiv height="80px" top="90%" width="200px" left="50%">
            <KakaoLogin />
          </StyledDiv>
        ) : (
          <StyledDiv height="80px" top="90%" width="200px" left="50%">
            매칭진행중인 유저입니다
          </StyledDiv>
        )}
      </MobileBox>
    </Container>
  );
};
export default Body14;
