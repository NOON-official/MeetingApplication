import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Bulb } from '../../Asset/page1/Bulb.svg';
import { ReactComponent as CatchPhrase } from '../../Asset/page1/Text.svg';
import { ReactComponent as Title } from '../../Asset/page1/Title.svg';
import { ReactComponent as Logo } from '../../Asset/page1/Logo.svg';
import { ReactComponent as Star } from '../../Asset/page1/Star.svg';
import { ReactComponent as MainText } from '../../Asset/page1/MainText.svg';
import { StyledDiv, StyledText, Container, MobileBox, StyledButton } from '../Elements/StyledComponent';
import client from '../../api';
import Counter from '../Elements/CountAnimation';

const Main = () => {
  const [num, setNum] = useState(0);
  const [modalOpen, setModalOpen] = useState(true);
  const [statusMale, setStatusMale] = useState();
  const [statusFeale, setStatusFeale] = useState();
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  {
    React.useEffect(() => {
      const loadCount = async()=>{
        await client
        .get('api/service/count/team')
        .then((res) => {
         setNum(res.data.data.waitingTeam)
        })
        .catch((err) => {
          console.log(err);
        });
      }
        loadCount();
      {
        /*client
    .get('api/service/apply/status')
    .then((res)=>{
      setStatusMale(res.data.data.maleIsFulled);
      setStatusFemale(res.data.data.femaleIsFulled)
    })
    .catch((err)=>{console.log(err)});
  */
      }
    }, [num]);
  }
  return (
    <Container height={'100%'} bg="#f8f3f3">
      {/** 여성 참가자 제한 modal */}
      {/*
        statusFemale&&
        <WomanNotAllowed
        open={modalOpen}
        close={closeModal}
        children={'9월 초에 시작되는 다음 시즌에 이용해주세요'}
      ></WomanNotAllowed>
  */}
      {/** 남성 참가자 제한 modal */}
      {/*
      statusMale&&
      <ManNotAllowed
        open={modalOpen}
        close={closeModal}
        children={'9월 초에 시작되는 다음 시즌에 이용해주세요'}
      ></ManNotAllowed>
      */}
      <MobileBox overflow="auto">
        <StyledDiv top="5.5%" left="17%" transform=" translate(-50%, 0)">
          <Bulb />
        </StyledDiv>
        <StyledDiv top="7%" left="52%" transform="translate(-50%, 0)">
          <CatchPhrase />
        </StyledDiv>
        <StyledDiv top="15%" left="52%" transform="translate(-50%, 0)">
          <Title />
        </StyledDiv>
        <StyledDiv top="23%" left="80%" transform="translate(-50%, 0)">
          <Star />
        </StyledDiv>
        <StyledDiv top="28%" left="50%" transform="translate(-50%, 0)">
          <Logo />
        </StyledDiv>
        <StyledDiv top="61%" left="50%" transform="translate(-50%, 0)">
          <MainText />
        </StyledDiv>

        <Link to="/apply/2" style={{ textDecoration: 'none' }}>
          <StyledButton height="45px" width="180px" top="70%" size="18px">
            매칭 시작하기
          </StyledButton>
        </Link>

        <Counter end={num} />
        <StyledDiv
          border_top="1px solid #D6D6D6"
          top="93%"
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
            margin="0 0 5% 5%"
            top="40%"
            left="50%"
            height="70%"
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

export default Main;
