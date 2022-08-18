import { StyledDiv, Container, MobileBox, StyledText } from '../Elements/StyledComponent';
import React from 'react';
import { ReactComponent as Star } from '../../Asset/finalPage/1.svg';
import { ReactComponent as StarYellow } from '../../Asset/finalPage/2.svg';
import { ReactComponent as Heart } from '../../Asset/finalPage/3.svg';
import { ReactComponent as Character } from '../../Asset/finalPage/4.svg';
import { ReactComponent as Text } from '../../Asset/page15/Text.svg';
import { ReactComponent as SubText } from '../../Asset/page15/SubText.svg';
const Body15 = () => {
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
        <StyledDiv top="80%" left="50%">
          <Text />
        </StyledDiv>
        <StyledDiv top="65%" left="50%">
          <SubText />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};
export default Body15;
