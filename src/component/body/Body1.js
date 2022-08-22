import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Bulb } from '../../Asset/page1/Bulb.svg';
import { ReactComponent as CatchPhrase } from '../../Asset/page1/Text.svg';
import { ReactComponent as Title } from '../../Asset/page1/Title.svg';
import { ReactComponent as Logo } from '../../Asset/page1/Logo.svg';
import { ReactComponent as Star } from '../../Asset/page1/Star.svg';
import { ReactComponent as MainText } from '../../Asset/page1/MainText.svg';
import { StyledDiv, StyledText, Container, MobileBox, StyledButton } from '../Elements/StyledComponent';

const Body1 = () => {
  return (
    <Container height={'100%'} bg="#f8f3f3">
      <MobileBox>
        <StyledText size="16px" position="absolute" top="5%" left="70%">
          {' '}
          <a href="https://furry-bank-197.notion.site/41d68ef2663145299e4726247eca28d3">서비스 설명 & 미팅꿀팁</a>{' '}
        </StyledText>
        <StyledDiv top="10.5%" left="10%" transform=" translate(-50%, 0)">
          <Bulb />
        </StyledDiv>
        <StyledDiv top="5%" left="50%" transform="translate(-50%, 0)">
          <CatchPhrase />
        </StyledDiv>
        <StyledDiv top="20%" left="50%" transform="translate(-50%, 0)">
          <Title />
        </StyledDiv>
        <StyledDiv top="30%" left="80%" transform="translate(-50%, 0)">
          <Star />
        </StyledDiv>
        <StyledDiv top="35%" left="50%" transform="translate(-50%, 0)">
          <Logo />
        </StyledDiv>
        <StyledDiv top="65%" left="50%" transform="translate(-50%, 0)">
          <MainText />
        </StyledDiv>

        <Link to="/apply/2" style={{ textDecoration: 'none' }}>
          <StyledButton height="50px" width="200px" top="80%">
            매칭 시작하기
          </StyledButton>
        </Link>

        <StyledDiv
          border_top="1px solid #D6D6D6"
          top="95%"
          left="50%"
          height="5%"
          width="100%"
          transform="translate(-50%, 0)"
          display="flex"
          flex-direction="row"
          justify_content="space-around"
          align_item="center"
        >
          <StyledText position="static" font="Pretendard" color="#515151">
            {' '}
            <a href="https://furry-bank-197.notion.site/4e3c4d1f8306494b9a54fc2226e9a3b7"> 이용약관</a>
          </StyledText>
          <StyledText font="Pretendard" position="static" color="#515151">
            <a href="https://furry-bank-197.notion.site/c83f4127e3c54b7080c333aa31a4cc03"> 개인정보처리방침</a>
          </StyledText>
          <StyledText font="Pretendard" color="#515151" position="static">
            <a href="https://furry-bank-197.notion.site/303cd8bbdefc41a3bf088b30a4c98f84"> 공지사항</a>
          </StyledText>
          <StyledText font="Pretendard" color="#515151" position="static">
            <a href="https://furry-bank-197.notion.site/aaa47097d9b24192a739a3f7aafa8556"> 문의사항</a>
          </StyledText>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body1;
