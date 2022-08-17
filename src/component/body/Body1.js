import styled from 'styled-components';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Bulb } from '../../Asset/page1/Frame.svg';
import { ReactComponent as CatchPhrase } from '../../Asset/page1/CatchPhrase.svg';
import { ReactComponent as Title } from '../../Asset/page1/Title.svg';
import { ReactComponent as Logo } from '../../Asset/page1/Logo.svg';
import { ReactComponent as Star } from '../../Asset/page1/Star.svg';
import { ReactComponent as MainText } from '../../Asset/page1/MainText.svg';
import { ReactComponent as MainButtonText } from '../../Asset/page1/MainButtonText.svg';
import { Container, MobileBox } from '../Elements/StyledComponent';
import { StyledDiv } from '../Elements/StyledComponent';

const Button = styled.button`
  border-radius: var(--round-borderradious);
  height: 50px;
  width: 200px;
  background-color: var(--color-ClickedPink);
  color: white;
  border-color: var(--color-gray);
  font-family: var(--font-family);
  font-size: var(--font-size-title);
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 20%;
  letter-spacing: 1px;
`;
const StyledText = styled.text`
  position: ${(props) => props.position};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: ${(props) => props.size || '13px'};
  line-height: 20px;
  align-items: center;
  justify-content: start;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  color: ${(props) => props.color};
  font-family: ${(props) => props.font || 'var(--font-family)'};
`;
const Body1 = () => {
  return (
    <Container height={'100%'} bg="#f8f3f3">
      <MobileBox>
        <StyledText size="16px" position="absolute" top="5%" left="70%">
          {' '}
          <a href="https://furry-bank-197.notion.site/41d68ef2663145299e4726247eca28d3">서비스 설명</a>{' '}
        </StyledText>
        <StyledDiv top="10.5%" left="27.5%" transform=" translate(-50%, 0)">
          <Bulb />
        </StyledDiv>
        <StyledDiv top="13%" left="50%" transform="translate(-50%, 0)">
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
          <Button>
            <MainButtonText />
          </Button>
        </Link>

        <StyledDiv
          border_top="1px solid #D6D6D6"
          top="90%"
          left="50%"
          height="10%"
          width="100%"
          transform="translate(-50%, 0)"
        >
          <StyledText font="Pretendard" color="#515151" position="absolute" left="10%" top="30%">
            {' '}
            이용약관
          </StyledText>
          <StyledText font="Pretendard" color="#515151" position="absolute" left="38%" top="30%">
            개인정보처리방침
          </StyledText>
          <StyledText font="Pretendard" color="#515151" position="absolute" left="80%" top="30%">
            <a href='https://furry-bank-197.notion.site/303cd8bbdefc41a3bf088b30a4c98f84"'> 공지사항</a>
          </StyledText>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body1;
