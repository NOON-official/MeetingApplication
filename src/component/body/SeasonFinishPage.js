import React, { useState } from 'react';
import { ReactComponent as KakaoLogoBlack } from '../../Asset/Kakao/KakaoTalkBlack.svg';
import { ReactComponent as Bulb } from '../../Asset/page1/Bulb.svg';
import { ReactComponent as CatchPhrase } from '../../Asset/page1/Text.svg';
import { ReactComponent as Title } from '../../Asset/page1/Title.svg';
import { ReactComponent as Logo } from '../../Asset/page1/Logo.svg';
import { ReactComponent as Star } from '../../Asset/page1/Star.svg';

import { StyledDiv, StyledText, Container, MobileBox } from '../Elements/StyledComponent';

const SeasonFinish = () => {
  /*React.useEffect(() => {
    client
      .get('api/service/count/team')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  }, []);*/
  return (
    <Container height={'100%'} bg="#f8f3f3">
      <MobileBox overflow="hidden">
        <StyledText position="absolute" top="3%" left="70%">
          <a id="tip" href="https://furry-bank-197.notion.site/41d68ef2663145299e4726247eca28d3">
            서비스 설명 & 미팅꿀팁
          </a>
        </StyledText>
        <StyledDiv top="10.5%" left="12%" transform=" translate(-50%, 0)">
          <Bulb />
        </StyledDiv>
        <StyledDiv top="5%" left="52%" transform="translate(-50%, 0)">
          <CatchPhrase />
        </StyledDiv>
        <StyledDiv top="20%" left="52%" transform="translate(-50%, 0)">
          <Title />
        </StyledDiv>
        <StyledDiv top="30%" left="80%" transform="translate(-50%, 0)">
          <Star />
        </StyledDiv>
        <StyledDiv top="35%" left="50%" transform="translate(-50%, 0)">
          <Logo />
        </StyledDiv>
        <StyledDiv
          width="100%"
          height="25%"
          display="flex"
          direction="column"
          justify_content="space-around"
          align_item="center"
          top="65%"
          left="50%"
          transform="translate(-50%, 0)"
        >
          <StyledDiv
            transform="0"
            position="static"
            display="flex"
            direction="column"
            height="30%"
            justify_content="flex-start"
            align_item="center"
          >
            {' '}
            <StyledText size="14px" fontWeight="500" font="Pretendard" position="static">
              미팅학개론의 2번째 시즌이 끝났습니다.
            </StyledText>
            <StyledText size="14px" fontWeight="500" font="Pretendard" position="static">
              9월 중에 시작하는 다음 시즌을 기다려주세요!
            </StyledText>
          </StyledDiv>

          <StyledDiv
            transform="0"
            position="static"
            display="flex"
            direction="column"
            height="70%"
            justify_content="space-around"
            align_item="center"
          >
            <StyledDiv transform="0" position="static">
              <StyledText size="14px" fontWeight="500" font="Pretendard" position="static">
                미팅학개론 담당자 연락처
              </StyledText>
            </StyledDiv>
            <StyledDiv transform="0" position="static">
              <StyledDiv
                transform="0"
                position="static"
                display="flex"
                direction="row"
                height="50%"
                justify_content="space-around"
                align_item="center"
              >
                <a href="https://pf.kakao.com/_Whxjqxj">
                  <StyledText size="13px" fontWeight="500" font="Pretendard" position="static">
                    미팅학개론 플러스친구
                  </StyledText>
                  <KakaoLogoBlack />
                </a>
              </StyledDiv>
              <StyledText color="#515151" size="12px" fontWeight="500" font="Pretendard" position="static">
                이수민 : 010-6879-5436
              </StyledText>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>

        <StyledDiv
          border_top="1px solid #D6D6D6"
          top="95%"
          left="50%"
          height="20%"
          width="100%"
          transform="translate(-50%, 0)"
          display="flex"
          flex-direction="column"
          justify_content="space-around"
          align_item="center"
        >
          <StyledDiv
            top="5%"
            left="50%"
            height="20%"
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
          <StyledDiv
            margin="0 0 0 5%"
            top="40%"
            left="50%"
            height="60%"
            width="100%"
            transform="translate(-50%, 0)"
            display="flex"
            direction="column"
            justify_content="flex-start"
            align_item="start"
          >
            <StyledText size="12px" position="static" font="Pretendard" color="#515151">
              노온
            </StyledText>
            <StyledText size="12px" position="static" font="Pretendard" color="#515151">
              대표자 남한솔
            </StyledText>
            <StyledText size="12px" position="static" font="Pretendard" color="#515151">
              연락처 010-6879-5436
            </StyledText>
            <StyledText size="12px" position="static" font="Pretendard" color="#515151">
              사업자등록번호 811-29-00871
            </StyledText>
            <StyledText size="12px" position="static" font="Pretendard" color="#515151">
              주소지 서울시 성북구 장월로 1마길 56 DAC 스타트업 인큐베이팅센터
            </StyledText>
          </StyledDiv>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default SeasonFinish;
